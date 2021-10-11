import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public courseService:CoursesService) { }

  ngOnInit(): void {
  }

}
