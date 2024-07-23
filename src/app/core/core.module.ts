import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AuthApiService } from './services/auth/auth-api.service';
import { AuthService } from './services/auth/auth.service';
import {SimplePageComponent} from "./components/simple-page/simple-page.component";
import {ShareService} from "./services/share.service";

@NgModule({
  declarations: [SimplePageComponent],
  imports: [CommonModule, NzNotificationModule],
  providers: [AuthApiService, AuthService, ShareService],
})
export class CoreModule {}
