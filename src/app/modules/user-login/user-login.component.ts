import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import PAGE_TITLE from '../../config/page-title.json';
import {UserAuthModel} from '../../shared/models/user-auth.model';
import {UserAuthService} from '../../shared/services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {

  returnUrl: string;
  userModel: UserAuthModel = {} as UserAuthModel;
  private destroyed$ = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title,
              private userAuthService: UserAuthService) {
    // Set page title
    this.titleService.setTitle(PAGE_TITLE.login);
  }


  @HostListener('window:keyup.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    if (this.userModel.username && this.userModel.password) {
      this.login();
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    if (this.userAuthService.isUserSignedIn()) {
      this.router.navigateByUrl(this.returnUrl, {
        replaceUrl: true
      }).then();
    }
  }

  /**
   * User login
   */
  login(): void {
    if (this.userModel && this.userModel.username && this.userModel.password) {
      this.userAuthService.login(this.userModel).pipe(
        takeUntil(this.destroyed$)
      ).subscribe(response => {
        this.router.navigateByUrl(this.returnUrl, {
          replaceUrl: true
        }).then();
      }, error => {
        // Handle error properly
        console.log('Error: ', error);
      });
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
