import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses : Course[]
  side_bar : boolean = false
  constructor(private http:HttpClient) { }
  
  createCourse(courseData: Course){
    this.http.post("http://localhost:8082/course",courseData)
    .subscribe();
  }

  getCourses(){
    return this.http.get<any[]>("http://localhost:8082/courses");
  }

  getCourseById(id : number){
    return this.http.get<any>("http://localhost:8082/course/"+id);
  }
 
  updateCourse(id : number,courseData : Course){
    this.http.put("http://localhost:8082/course/"+id,courseData).subscribe();
  }

  getSideBar(){
    return this.side_bar;
  }
  openSideBar(){
    this.side_bar = true;
  }
  closeSideBar(){
    this.side_bar = false;
  }
}
