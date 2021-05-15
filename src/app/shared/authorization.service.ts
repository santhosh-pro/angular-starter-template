import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthHelperService } from './auth-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private jwtHelperService: JwtHelperService,
    private authHelperService:AuthHelperService) {}

  isAuthorized(): boolean {

    const token = this.authHelperService.getAccessToken();

    const decodeToken = this.jwtHelperService.decodeToken(token);

    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }
    
    return true;
  }
}
