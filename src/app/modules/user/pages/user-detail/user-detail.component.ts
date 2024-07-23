import {Component, inject} from '@angular/core';
import { Observable, takeUntil} from 'rxjs';
import {User} from '../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from "@angular/common";
import {SimplePageComponent} from "../../../../core/components/simple-page/simple-page.component";
import {AuthService} from "../../../../core/services/auth/auth.service";
import {UserApiService} from "../../services";


@Component({
  selector: 'sf-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent extends SimplePageComponent{
  private readonly authService: AuthService = inject(AuthService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly location: Location = inject(Location);
  private readonly userApiService: UserApiService = inject(UserApiService);
  userId!: number;
  user$!: Observable<User>;
  canActiveUserWriteUser$!: Observable<boolean>;

  override ngOnInit() {
    this.getUserId();
    this.setupPage();

  }

  override setupPage() {
    if(!this.userId){
      return;
    }
    this.user$ = this.userApiService.getSingle({id:this.userId, withRelations: ["cars"]});
    this.canActiveUserWriteUser$ = this.authService.canActiveEdit$({object: this.user$});
  }

  protected goToEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  private getUserId(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        //+ before id just parse string to number
        this.userId = +id;
      } else {
        this.authService.me$.pipe(takeUntil(this.destroyed$)).subscribe(
          me => {
            if(me !== null){
              this.userId = me.id
              this.router.navigate([this.userId], {relativeTo: this.route})
              this.setupPage();
            }
          }
        );
      }
    });
  }
  override goBack():void{
    this.router.navigate(["/offer"])
  }
}
