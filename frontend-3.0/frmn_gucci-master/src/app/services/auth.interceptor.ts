import {HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //add the jwt token (localStorage) request
        let authReq=req;
        const token= this.login.getToken();
        const tokenStr = 'Bearer ' + token;

        console.log(tokenStr);
        console.log("inside dak lmard");
        if(token!=null){
            authReq= authReq.clone({
                setHeaders : {"Authorization": tokenStr},
            });
        } 
        console.log(authReq.params);
        return next.handle(authReq);
    }
}
export const AuthInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,

    },
];