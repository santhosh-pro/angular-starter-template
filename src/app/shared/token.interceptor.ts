import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthHelperService } from "./auth-helper.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authHelperService: AuthHelperService,
        private jwtHelperService: JwtHelperService,
        private httpClient: HttpClient) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authHelperService.getAccessToken();
        const refreshToken = this.authHelperService.getRefreshToken();
        if (accessToken) {
            if (this.jwtHelperService.isTokenExpired(accessToken)) {
                this.authHelperService.removePreference();
                this.httpClient.post(environment.baseApiUrl + '/users/refresh',
                    {
                        accessToken: accessToken,
                        refreshToken: refreshToken
                    }
                )
                    .subscribe((res: any) => {
                        this.authHelperService.storePreference(res.accessToken, res.refreshToken)
                    })
            }
        }
        return next.handle(this.addAuthorizationHeader(req, this.authHelperService.getAccessToken()));
    }

    private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
        // If there is token then add Authorization header otherwise don't change    request
        if (token) {
            return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        } return request;
    }
}