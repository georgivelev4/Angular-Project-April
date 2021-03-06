import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  username = localStorage.getItem('username');
  courses;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService
      .getMyCourses(this.username)
      .subscribe((data) => {
        this.courses = data['coursesNeeded'];
      })
  }

}
