import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit { 
  courseData: any = {courseId: "",title: "", durationDays: "",handsOn: false, theorySessionHoursPerDay: "", prerequisites: "", technologyStack: ""};
  currUrl : String;
  isEdit : boolean = false;
  currId : number;
  constructor(private courseService : CoursesService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.currId = this.route.snapshot.params["id"];
    this.currUrl = this.router.url;
    if(this.currUrl.indexOf("edit-course") > -1){
      this.isEdit = true;
      this.courseService.getCourseById(this.currId).subscribe(e => {
        this.courseData = {
          courseId: e.courseId, title: e.title, durationDays: e.durationDays, handsOn: e.handsOn, theorySessionHoursPerDay: e.theorySessionHoursPerDay,
          prerequisites: e.prerequisites, technologyStack: e.technologyStack
        }
      });
    }
    else{
      this.isEdit = false;
    }
    
  }

  onSubmit(formData: any){
    this.courseData = {title : formData.courseTitle, durationDays : formData.duration, 
      handsOn: formData.isHandsOn, theorySessionHoursPerDay: formData.hoursPerDay, prerequisites: formData.preRequisites, technologyStack: formData.techStack}
    this.courseService.createCourse(this.courseData);
    this.courseData = { courseId: "", title: "", durationDays: "", handsOn: false, theorySessionHoursPerDay: "", prerequisites: "", technologyStack: "" };
  }

  onEdit(formData: any){
    this.courseData = {
      title: formData.courseTitle, durationDays: formData.duration,
      handsOn: formData.isHandsOn, theorySessionHoursPerDay: formData.hoursPerDay, prerequisites: formData.preRequisites, technologyStack: formData.techStack
    }
    this.courseService.updateCourse(this.currId, this.courseData);
  }


}
