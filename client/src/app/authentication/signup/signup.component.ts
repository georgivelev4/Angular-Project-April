import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
form;
  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    })
  }

  signUp(){
  
    this.authService
      .register(this.form.value)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
       localStorage.setItem('username', data['username']);
       localStorage.setItem('isAdmin', data['isAdmin']);
        this.toastr.success(data['message']);
        this.router.navigate([ '/home' ]);
      });

  }

}
