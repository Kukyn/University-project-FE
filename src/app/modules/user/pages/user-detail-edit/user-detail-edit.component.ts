import {Component, inject} from '@angular/core';
import {SimplePageComponent} from "../../../../core/components/simple-page/simple-page.component";
import {ActivatedRoute} from "@angular/router";
import {UserApiService} from "../../services";
import {forkJoin, Observable} from "rxjs";
import {User} from "../../models/user.model";

@Component({
  selector: 'sf-user-detail-edit',
  templateUrl: './user-detail-edit.component.html',
  styleUrl: './user-detail-edit.component.scss',
})
export class UserDetailEditComponent extends SimplePageComponent{
  private route: ActivatedRoute = inject(ActivatedRoute);
  private userApiService: UserApiService = inject(UserApiService);

  userId!: number;
  user$!: Observable<User>

  override ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        //+ before id just parse string to number
        this.userId = +id;
      }
    });
    super.ngOnInit();
  }

  override setupPage() {
    super.setupPage();
    this.user$ = this.userApiService.getSingle({id: this.userId});
    forkJoin([this.user$])
  }
}
