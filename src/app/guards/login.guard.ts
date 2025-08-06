import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../sevices/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService,private toastrService: ToastrService, private router: Router) {

  }
  /*
   " Login Guard'ı " Login olması gereken sayfaya yönlendireceği zaman kontrol edip eğer olmadıysa
  tekrar login sayfasına yönlendirmek için kullanıyoruz
   */
  canActivate( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthhentication()){
      console.log("Guard calıstı");
      return true; // eğer sisteme başarılı giriş yaptıysa logine geçebilsin
    }
    else{
      this.router.navigate(["login"]);
      this.toastrService.info("Sisteme Giriş Yapmalısınız");
      console.log("Guard çalıştı");
      return false;
    }
  }

}
