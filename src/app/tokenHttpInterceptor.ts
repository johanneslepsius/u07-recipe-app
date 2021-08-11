import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable() export class TokenHttpInterceptor implements HttpInterceptor { 
    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('edamam')) {
            return next.handle(req);
        }

        const token = localStorage.getItem('token');

        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
        });

        if (req.headers.get('skip')) {
            req = req.clone({ headers: req.headers.delete('skip') })
            console.log(req);
            return next.handle(req);
        }

        return next.handle(modifiedReq);
    }

}