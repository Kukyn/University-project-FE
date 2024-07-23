import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {cs_CZ, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import cs from '@angular/common/locales/cs';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {CoreModule} from './core';
import {errorInterceptor} from './core/interceptors/error.interceptor';
import {UserModule} from './modules/user/user.module';
import {LoginComponent} from './modules/login/login.component';
import {httpInterceptor} from "./core/interceptors/http.interceptor";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";
import {AngularSvgIconModule} from "angular-svg-icon";
import {AngularSvgIconPreloaderModule} from "angular-svg-icon-preloader";

registerLocaleData(cs);

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: 'hsl(187, 36%, 50%)',
  }
};

@NgModule({
  declarations: [AppComponent, LoginComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    UserModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/icons/icons.json',
    }),
  ],
  providers: [
    {provide: NZ_I18N, useValue: cs_CZ},
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([httpInterceptor, errorInterceptor])),
    {provide: NZ_CONFIG, useValue: ngZorroConfig},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
