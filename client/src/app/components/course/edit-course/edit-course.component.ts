import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CourseService } from '../../../core/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  form;
  course;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      description:[''] ,
      imageUrl: [''],
      cost: ['']
    });
    this.route.params.subscribe(data => {
      const id = data['id'];
      this.courseService.getCourse(id).subscribe(data => {
        this.course = data['course'];
      })
    })

  }
  editCourse() {
    this.route.params.subscribe(dataParam => {
      const id = dataParam['id'];
      let data = this.form.value;
      data['startingCourse'] = this.course;
      this.courseService.editCourse(id, data).subscribe(data => {
        this.router.navigate(['/home']);
        this.toastr.success(data['message']);
      }, error => {
        console.log(error);
      });
    })
  }

}
