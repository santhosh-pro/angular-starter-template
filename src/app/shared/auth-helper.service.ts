import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
const accessTokenKey = 'accessToken';
const refreshTokenKey = 'refreshToken';

@Injectable({
  providedIn: 'root',
})

export class AuthHelperService {
  isUserLogged$: Subject<boolean> = new BehaviorSubject<boolean>(true);
  
  constructor() {
    this.isUserLogged$.next(!!localStorage.getItem(accessTokenKey));
  }


  storePreference(accessToken: string, refreshToken: string): void {
    localStorage.setItem(accessTokenKey, accessToken);
    localStorage.setItem(refreshTokenKey,refreshToken);
    this.isUserLogged$.next(true);
  }

  getAccessToken(): string {
    return localStorage.getItem(accessTokenKey);
  }

  getRefreshToken(): string {
    return localStorage.getItem(refreshTokenKey);
  }

  removePreference(): void {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
    this.isUserLogged$.next(false);
  }

}
