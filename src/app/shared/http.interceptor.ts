import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest,
    HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertMessageService } from './controls/alert-message/alert-message.service';
@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor(public alertMessage: AlertMessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.error.message !== undefined) {
                        this.alertMessage.error('Error',error.error.message);
                    } else {
                        this.alertMessage.error('An error occurred, Please try again', '');
                    }

                    return throwError(error);
                })
            );
    }
}