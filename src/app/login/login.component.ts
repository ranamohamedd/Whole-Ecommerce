import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean=false;
  apiError:string='';
  isNotValidForm:boolean=false;
  
    constructor(private _authService: AuthService,private _router:Router) {
  
    }
  
  
   loginForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  
    })
  
  
    login(form: FormGroup) {
      console.log("hiii", form);
      this.isLoading=true;
      if (form.valid) {
        this._authService.login(form.value).subscribe(
          {
            next: (res: any) => {
              console.log(res);
              this.isLoading=false;
              localStorage.setItem("userToken",res.token);
              this._authService.getUserData();
              this._router.navigate(['/home']) 
            },
            error:(err:any)=>{
              console.log("error",err);
              // this.apiError=(err.error.message) ;
            }
          }) 
      }else{
         this.isNotValidForm=true;
      }
    }
}

