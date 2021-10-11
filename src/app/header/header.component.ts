import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public courseService:CoursesService) { }

  ngOnInit(): void {
  }

  

}
