import { ReportGenerationComponent } from './report-generation/report-generation.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ListTrainingsComponent } from './list-trainings/list-trainings.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NominationsComponent } from './nominations/nominations.component';
import { AssignmentsComponent } from './assignments/assignments.component';
const routes: Routes = [
  {path:"add-course", component:CourseComponent},
  {path:"add-training", component:TrainingsComponent},
  {path:"courses",component:ListCoursesComponent},
  {path:"edit-course/:id",component:CourseComponent},
  {path:"edit-training/:id",component:CourseComponent},
  {path:"report", component:ReportGenerationComponent},
  {path:"trainings",component:ListTrainingsComponent},
  {path:"attendance",component:AttendanceComponent},
  {path:"nominations",component:NominationsComponent},
  {path:"assignments",component:AssignmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
