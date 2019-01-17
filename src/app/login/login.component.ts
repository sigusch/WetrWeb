import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginErrorMessages } from './login-error-messages'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  login: any = {
    username: '',
    password: ''
  };
  errors: { [key: string]: string } = {};
  loginError: string;
  private return: string = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
    this.route.queryParams.subscribe(params => this.return = params['returnUrl'])
  }

  submitForm() {
    this.userService.UserLogin( {username: this.login.username, password: this.login.password}).subscribe(() => {},
      error => {
        this.loginError = 'Benutzername oder Passwort falsch';
      },
      () => {
        sessionStorage.setItem('login', 'true');
        sessionStorage.setItem('username', this.login.username);
        this.router.navigateByUrl(this.return);
        document.location.reload(true);
      })
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of LoginErrorMessages) {
      const control = this.myForm.form.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
