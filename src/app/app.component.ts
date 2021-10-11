import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { TrainingsService } from './services/trainings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'virtusa-project';
  constructor(public courseService: CoursesService,public trainingService: TrainingsService){
  }
<<<<<<< HEAD


=======
>>>>>>> fa0d480251f0a27c05c648a6cc91074dc4189c9c
}
