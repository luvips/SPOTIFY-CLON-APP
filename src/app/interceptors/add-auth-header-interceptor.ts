import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieStorageService } from '../services/cookie-storage-service';
import { SpotifyLoginService } from '../services/spotify-api/spotify-login-service';

export const addAuthHeaderInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next:HttpHandlerFn) => {

  if(req.url.includes('api.spotify.com/v1')){  
    const _cookieService: CookieStorageService = inject(CookieStorageService);
    const _loginService: SpotifyLoginService = inject(SpotifyLoginService);

    if(!_cookieService.isCookieValid('access_token')){
      _loginService.getToken().subscribe();
    }

    const access_token = _cookieService.getCookieValue('access_token');


    const reqWHeaders = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${access_token}`),
    })

    return next(reqWHeaders)
  }
  return next(req);
    
};
