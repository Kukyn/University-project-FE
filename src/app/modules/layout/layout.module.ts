import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { NzContentComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import {SharedModule} from "../../shared/shared.module";
import {NzButtonComponent} from "ng-zorro-antd/button";

@NgModule({
  declarations: [LayoutComponent],
    imports: [CommonModule, LayoutRoutingModule, RouterOutlet, NzLayoutComponent, NzHeaderComponent, NzContentComponent, SharedModule, NzButtonComponent],
})
export class LayoutModule {}
