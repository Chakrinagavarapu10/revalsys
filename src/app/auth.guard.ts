import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurd implements CanActivate {

  constructor(private router: Router) {
}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let name = localStorage.getItem('logName');

    if (name) {
    return true
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }


}
