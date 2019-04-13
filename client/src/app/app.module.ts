import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { SinginComponent } from './authentication/singin/singin.component';
import { AuthService } from './authentication/auth.service';
import { CreateComponent } from './course/create/create.component';
import { CourseService } from './course/course.service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { MyCoursesComponent } from './course/my-courses/my-courses.component';

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
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
