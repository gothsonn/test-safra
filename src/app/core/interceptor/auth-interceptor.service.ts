import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const ts = new Date().getTime();
    const hash = Md5.hashStr(ts + environment.privateKey + environment.apiKey);
    const params = {
      'apikey': environment.apiKey,
      'ts': ts,
      'hash': hash
    }
    const param = new HttpParams({ fromObject: params })
    const authReq = req.clone({ params: param });
    return next.handle(authReq);
  }

}
