import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
course: Course
  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.courseService.getCourse(id).subscribe((data) => {
        this.course = data['course'];
      });
    });
  }
  deleteCourse(){
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.courseService.deleteCourse(id).subscribe((data) => {
        this.toastr.success(data['message']);
        this.router.navigate(['/home']);
      });
    });
  }

}
