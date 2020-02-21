import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import AppConstants from '../../app-constants';
import {UserModel} from '../models/user.model';
import {UserAuthModel} from '../models/user-auth.model';
import {RestClientService} from '../../core/services/rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private readonly currentUserSubject: BehaviorSubject<UserModel>;

  constructor(private readonly restService: RestClientService) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(sessionStorage.getItem(AppConstants.SESSION_USER)));
  }

  public get currentUserInfo(): UserModel {
    return this.currentUserSubject.value;
  }

  /**
   * Check if user is logged-in
   */
  isUserSignedIn(): boolean {
    return AppConstants.SESSION_USER in sessionStorage;
  }

  /**
   * Get signed-in user's username
   */
  getSignedInUsername() {
    return this.currentUserInfo && this.currentUserInfo.username;
  }

  /**
   * User login
   * @param userAuthModel: Auth-user model
   */
  login(userAuthModel: UserAuthModel): Observable<UserModel> {
    return this.restService.post(environment.serviceUrls.login, userAuthModel).pipe(
      pluck('data'),
      map(response => {
        if (response) {
          sessionStorage.setItem(AppConstants.SESSION_USER, JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      }));
  }

  /**
   * User logout
   */
  logout(): Observable<any> {
    const username = this.currentUserInfo && this.currentUserInfo.username;
    return this.restService.post(environment.serviceUrls.logout, {username}).pipe(map((response) => {
      if (response) {
        sessionStorage.removeItem(AppConstants.SESSION_USER);
        this.currentUserSubject.next(null);
      }
      return response;
    }));
  }
}
