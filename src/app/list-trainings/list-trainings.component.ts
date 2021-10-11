import { TrainingsService } from '../services/trainings.service';
import { Training } from '../models/training.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-trainings',
  templateUrl: './list-trainings.component.html',
  styleUrls: ['./list-trainings.component.css']
})
export class ListTrainingsComponent implements OnInit {

  trainings : Training[] = []
  columns: string[][] = [["title","Title"], ["scheduledfrom","ScheduledFrom"], ["scheduledto","ScheduledTo"], 
    ["hoursPerDay", "Hours Per Day"], ["from", "From"], ["to","To"]];

  searchTerm: string;
  direction: string = "asc";
  sortColumn: string = "title";
  currentPage: number = 0;
  itemsPerPage: number = 3;
  pages: number;
  trackPage:number = 0;
  constructor(private trainingService : TrainingsService) { }

  ngOnInit(): void {
    this.trainingService.getTraining().subscribe(data => {
      data.forEach(e => {
        let temp = {trainingId:e.trainingId,title:e.title,scheduledfrom:e.scheduledfrom,scheduledto:e.scheduledto,hoursPerDay:e.hoursPerDay,
        from:e.from,to:e.to};
        this.trainings.push(temp);
        this.setPages();
      })
    });
  }

  checkscheduledto(col: String){
    if(col === "scheduledto"){
      return true;
    }
    return false;
  }

  setPages(){
    this.pages = Math.ceil(this.trainings.length / this.itemsPerPage);
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
