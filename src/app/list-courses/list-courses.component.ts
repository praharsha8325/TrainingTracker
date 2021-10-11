import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  courses : Course[] = []
  columns: string[][] = [["title","Title"], ["durationDays","Duration"], ["handsOn","Hands On"], 
    ["theorySessionHoursPerDay", "Hours Per Day"], ["prerequisites", "Pre-requisites"], ["technologyStack","Technology Stack"]];

  searchTerm: string;
  direction: string = "asc";
  sortColumn: string = "title";
  currentPage: number = 0;
  itemsPerPage: number = 3;
  pages: number;
  trackPage:number = 0;
  constructor(private courseService : CoursesService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      data.forEach(e => {
        let temp = {courseId:e.courseId,title:e.title,durationDays:e.durationDays,handsOn:e.handsOn,theorySessionHoursPerDay:e.theorySessionHoursPerDay,
        prerequisites:e.prerequisites,technologyStack:e.technologyStack};
        this.courses.push(temp);
        this.setPages();
      })
    });
  }

  checkHandsOn(col: String){
    if(col === "handsOn"){
      return true;
    }
    return false;
  }

  setPages(){
    this.pages = Math.ceil(this.courses.length / this.itemsPerPage);
  }

  handleNext(){
    if(this.currentPage >= this.pages-1){
      this.currentPage = 0;
    }
    else{
      this.currentPage += 1;
    }
  }

  handlePrev(){
    if(this.currentPage <= 0){
      this.currentPage = this.pages-1;
    }
    else{
      this.currentPage -= 1;
    }
  }

  setCurrentPage(page:number){
    this.currentPage = page-1;
  }
 
  isCurrentPage(val:number){
    console.log(this.currentPage === val);
    return this.currentPage === val;
  }
}
