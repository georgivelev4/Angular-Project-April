import {
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  signIn(){
    console.log(this.form);
    this.authService
      .login(this.form.value)
      .subscribe((data) => {
        console.log(data)
        localStorage.setItem('token', data['token']);
        localStorage.setItem('username', data['user']['username']);
        localStorage.setItem('isAdmin', data['user']['isAdmin']);
        this.toastr.success(data['message']);
        this.router.navigate([ '/home' ]);
      });
    }
}
