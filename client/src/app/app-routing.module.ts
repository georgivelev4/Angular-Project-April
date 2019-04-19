import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './components/authentication/singin/singin.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { CreateComponent } from './components/course/create/create.component';
import { AuthGuardAdmin } from './core/guards/auth-guard-admin.service';
import { AuthGuard } from './core/guards/auth.guard';
import { MyCoursesComponent } from './components/course/my-courses/my-courses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TakeCourseComponent } from './components/course/take-course/take-course.component';
import { DeleteCourseComponent } from './components/course/delete-course/delete-course.component';
import { EditCourseComponent } from './components/course/edit-course/edit-course.component';

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
