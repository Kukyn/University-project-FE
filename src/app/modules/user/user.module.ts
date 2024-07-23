import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserDetailEditComponent } from './pages/user-detail-edit/user-detail-edit.component';
import { UserApiService } from './services';
import { UserRoutingModule } from './user-routing.module';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {
  NzPageHeaderComponent,
  NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective,
  NzPageHeaderTitleDirective
} from "ng-zorro-antd/page-header";
import {NzTagComponent} from "ng-zorro-antd/tag";
import {NzRowDirective} from "ng-zorro-antd/grid";
import {NzSpaceComponent} from "ng-zorro-antd/space";
import {SharedModule} from "../../shared/shared.module";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";

@NgModule({
  declarations: [UserComponent, UserDetailComponent, UserDetailEditComponent],
  imports: [CommonModule, NzNotificationModule, NzButtonComponent, UserRoutingModule, NzDividerComponent, NzPageHeaderComponent, NzPageHeaderContentDirective, NzPageHeaderTitleDirective, NzTagComponent, NzPageHeaderSubtitleDirective, NzRowDirective, NzPageHeaderTagDirective, NzSpaceComponent, SharedModule, NzPageHeaderExtraDirective, NzAvatarComponent,],
  providers: [UserApiService],
})
export class UserModule {}
