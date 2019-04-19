import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

const createCrs = 'http://localhost:9999/feed/course/create';
const allCourses = 'http://localhost:9999/feed/courses';
const myCourses = 'http://localhost:9999/feed/mycourses';
const getCourse = 'http://localhost:9999/feed/details/';
const takeCourse = 'http://localhost:9999/feed/takecourse/';
const deleteCourse = 'http://localhost:9999/feed/deletecourse/';
const editCourse = 'http://localhost:9999/feed/editcourse/'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  createCourse(formValue) {
    return this.http.post(createCrs, formValue);
  }
  getMyCourses(username){
    return this.http.post(myCourses, { username });
  }
  getAllCourses() {
    return this.http.get(allCourses);
  }
  getCourse(id): Observable<Course> {
    return this.http.get<Course>(getCourse + id);
  }
  takeCourse(id, username) {
    return this.http.post(takeCourse + id, { username });
  }
  deleteCourse(id) {
    return this.http.post(deleteCourse + id, {});
  }
  editCourse(id, data) {
    return this.http.post(editCourse + id, { data })
  }
}
