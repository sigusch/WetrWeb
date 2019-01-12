import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(protected router: Router,) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let isLoggedIn = !(sessionStorage.getItem('login') != null);
      if (isLoggedIn) {
        this.router.navigate(['/login'], 
              { queryParams: { returnUrl: state.url } });
        return false;
      } else {
        return true;
      }
  }
}
