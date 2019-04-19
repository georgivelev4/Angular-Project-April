import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../core/models/course';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-take-course',
  templateUrl: './take-course.component.html',
  styleUrls: ['./take-course.component.css']
})
export class TakeCourseComponent implements OnInit {
  course: Course
  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.courseService.getCourse(id).subscribe((data) => {
        this.course = data['course'];
      });
    });


  }
  takeCourse(courseObj) {
    this.route.params.subscribe((data) => {
      const id = data['id'];
      const username = localStorage.getItem('username');

      this.courseService.takeCourse(id,username ).subscribe((data) => {
        this.toastr.success(data['message']);
        this.router.navigate(['/home']);
      });
    });
  }

}
