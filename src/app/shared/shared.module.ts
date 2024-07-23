import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacerComponent } from './components/spacer/spacer.component';
import { ButtonComponent } from './components/button/button.component';
import {NzButtonComponent} from "ng-zorro-antd/button";
import { TextComponent } from './components/text/text.component';
import {NzIconDirective} from "ng-zorro-antd/icon";
import { IconComponent } from './components/icon/icon.component';
import {CoreModule} from "../core";
import {SvgIconComponent} from "angular-svg-icon";

@NgModule({
    declarations: [
        SpacerComponent,
        ButtonComponent,
        TextComponent,
        IconComponent,
    ],
  imports: [CommonModule, NzButtonComponent, NzIconDirective, CoreModule, SvgIconComponent],
  exports: [
    SpacerComponent,
    TextComponent,
    IconComponent,
  ]
})
export class SharedModule {}
