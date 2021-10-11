import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { ReportGenerationComponent } from './report-generation/report-generation.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainingsComponent } from './trainings/trainings.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ListTrainingsComponent } from './list-trainings/list-trainings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IteratePipe } from './pipes/iterate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


import { AttendanceComponent } from './attendance/attendance.component';
import { NominationsComponent } from './nominations/nominations.component';
import { AssignmentsComponent } from './assignments/assignments.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    ReportGenerationComponent,
    TrainingsComponent,
    FilterPipe,
    SortPipe,
    ListCoursesComponent,
    ListTrainingsComponent,
    SidebarComponent,
    IteratePipe,
    AttendanceComponent,
    NominationsComponent,
    AssignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
