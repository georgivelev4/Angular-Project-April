import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  signIn(){
    
    this.authService
      .login(this.form.value)
      .subscribe((data) => {
        console.log(data);
       localStorage.setItem('token', data['token']);
       localStorage.setItem('username', data['username']);
       localStorage.setItem('isAdmin', data['isAdmin']);
        this.toastr.success(data['message']);
        this.router.navigate([ '/home' ]);
      });

  }

}
