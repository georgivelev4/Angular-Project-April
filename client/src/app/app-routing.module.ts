import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './authentication/singin/singin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreateComponent } from './course/create/create.component';
import { AuthGuardAdmin } from './authentication/guards/auth-guard-admin.service';
import { AuthGuard } from './authentication/guards/auth.guard';
import { MyCoursesComponent } from './course/my-courses/my-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { TakeCourseComponent } from './course/take-course/take-course.component';
import { DeleteCourseComponent } from './course/delete-course/delete-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SinginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuardAdmin] },
  { path: 'mycourses', component: MyCoursesComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'takecourse/:id', component: TakeCourseComponent, canActivate: [AuthGuard] },
  { path: 'deletecourse/:id', component: DeleteCourseComponent, canActivate: [AuthGuardAdmin] },
  { path: 'editcourse/:id', component: EditCourseComponent, canActivate: [AuthGuardAdmin] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
