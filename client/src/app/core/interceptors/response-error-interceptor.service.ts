import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponseErrorInterceptorService implements HttpInterceptor{

  constructor(public toastr: ToastrService) { }
  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(tap((success)=>{}), catchError((err)=>{
        this.toastr.error(err.error.message);
        throw err;
      }));
  }
}
