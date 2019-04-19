import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
form;
  constructor(private courseService: CourseService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      cost: ['', [Validators.required]],
    });
  }
  createCourse(){
    this.courseService
    .createCourse(this.form.value)
    .subscribe((data) => {
      
      this.toastr.success(data['message']);
      this.router.navigate([ '/home' ]);
    });
  }

}
