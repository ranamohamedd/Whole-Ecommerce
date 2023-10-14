import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})




export class SignupComponent {
  hide = true;
  isLoading: boolean = false;
  apiError: string = '';
  isNotValidForm: boolean = false;
  constructor(private _authService: AuthService, private _router: Router) {

  }


  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl('',
      [
      ]
    ),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)])

  },
  {validators:[this.confirmPassword]} as FormControlOptions);

  confirmPassword(group: FormGroup): void {
    const password = group.get('password')
    const rePassword = group.get('rePassword')

    if (rePassword?.value === '') {
      rePassword?.setErrors({
        required: true
      })
    }else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({
        mismatch: true
      })
    }
  }

  register(form: FormGroup) {
    console.log("hiii", form);
    this.isLoading = true;
    if (form.valid) {
      this._authService.register(form.value).subscribe(
        {
          next: (res: any) => {
            console.log(res);
            this.isLoading = false;
            this._router.navigate(['/login'])
          },
          error: (err: any) => {
            console.log("error", err.error.errors.msg);
            // this.apiError = err.error.errors.msg;
          }
        })
    } else {
      this.isNotValidForm = true;
    }
  }
}
