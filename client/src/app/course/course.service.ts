import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const createCrs = 'http://localhost:9999/feed/course/create';
const allCourse = 'http://localhost:9999/feed/courses';
const myCourses = 'http://localhost:9999/feed/mycourses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  createCourse(formValue){
    return this.http.post(createCrs, formValue);
  }
  getMyCourses(username){
    return this.http.post(myCourses, username);
  }
  getAllCourses(){
    return this.http.get(allCourse);
  }
}
