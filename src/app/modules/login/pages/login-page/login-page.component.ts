import {Component, inject, isDevMode, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { environment } from '../../../../../environments/environment';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ActivatedRoute, Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'sf-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  register(){
    this.router.navigate(['register'], {relativeTo: this.route})
  }

  submitForm(): void {
    if (this.form.valid) {
      this.loginUser();
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnInit() {
    if (isDevMode()) {
      this.form.controls.userName.setValue(environment.email);
      this.form.controls.password.setValue(environment.password);
    }
  }

  private loginUser():void {
    this.authService.loginUser({
      email: this.form.controls.userName.value ?? '',
      password: this.form.controls.password.value ?? '',
    }).pipe(untilDestroyed(this)).subscribe(isLogged => {
        if(!isLogged){
          this.form.get('userName')?.setErrors({ required: true });
          this.form.get('password')?.setErrors({ required: true });
          return;
        }
        this.router.navigate(["/offer"]);
      }
    );
  }
}
