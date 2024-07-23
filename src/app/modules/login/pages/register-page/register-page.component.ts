import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {UserApiService} from "../../../user";

@UntilDestroy()
@Component({
  selector: 'sf-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly userApiService: UserApiService = inject(UserApiService);
  private router: Router = inject(Router);

  form = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      this.registerUser();
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private registerUser():void {
    this.userApiService.create({
      email: this.form.controls.email.value ?? '',
      password: this.form.controls.password.value ?? '',
      first_name: this.form.controls.password.value ?? '',
      last_name: this.form.controls.password.value ?? '',
      phone_number: this.form.controls.password.value ?? '',
      is_admin: false,
    }).pipe(untilDestroyed(this)).subscribe(isLogged => {
        if(!isLogged){
          return;
        }
        this.router.navigate(["/login"]);
      }
    );
  }
}
