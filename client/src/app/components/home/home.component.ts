import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCourses;
  constructor(private authService: AuthService, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService
    .getAllCourses()
    .subscribe((data)=>{
      this.allCourses = data['courses'];
    })
  }

}
