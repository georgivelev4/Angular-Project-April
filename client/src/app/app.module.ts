import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { SinginComponent } from './components/authentication/singin/singin.component';
import { AuthService } from './core/services/auth.service';
import { CreateComponent } from './components/course/create/create.component';
import { CourseService } from './core/services/course.service';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';
import { MyCoursesComponent } from './components/course/my-courses/my-courses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TakeCourseComponent } from './components/course/take-course/take-course.component';
import { DeleteCourseComponent } from './components/course/delete-course/delete-course.component';
import { EditCourseComponent } from './components/course/edit-course/edit-course.component';
import { ResponseErrorInterceptorService } from './core/interceptors/response-error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SinginComponent,
    SignupComponent,
    HomeComponent,
    SinginComponent,
    CreateComponent,
    MyCoursesComponent,
    ProfileComponent,
    TakeCourseComponent,
    DeleteCourseComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    CourseService,
    ToastrService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ResponseErrorInterceptorService, multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
