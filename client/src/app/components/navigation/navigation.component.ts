import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{

  constructor(private router: Router, private authService: AuthService) { }

  
  logout(): void {
    localStorage.clear(); 
    this.router.navigate(['/login']);
  }
  isAdmin(){
    return localStorage.getItem('isAdmin') === '0';
  }

}
