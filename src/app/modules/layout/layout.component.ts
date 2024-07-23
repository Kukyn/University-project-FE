import {Component, inject} from '@angular/core';
import {AuthService} from "../../core/services/auth/auth.service";

@Component({
  selector: 'sf-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
    private readonly authService: AuthService = inject(AuthService);

    logOut(){
      this.authService.logOutUser();
    }
}
