import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../_services/auth.service";
import {map, take} from "rxjs";

export const authGuard: CanActivateFn = (
  route,
  state
) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.AuthenticatedUser$.pipe(
    take(1), // take the first one and then unsubscribe automatically
    map(user => {
      // check if route is restricted by role
      debugger
      const { roles } = route.data;
      if(user && user.role && roles.includes(user.role.name)) {
        debugger
       return true;
      }
      if(user) {
        debugger
       return  router.createUrlTree(['/forbidden']);
      }
      return  router.createUrlTree(['/login']);
    })
  )
};
