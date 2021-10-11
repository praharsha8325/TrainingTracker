
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Training } from '../models/training.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class TrainingsService {

//   constructor(private http:HttpClient) { }
  
//   createTraining(trainingData: Training){
//     this.http.post("url",trainingData)
//     .subscribe((res) => console.log(res));
//   }

// }
import { Training } from '../models/training.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  trainings : Training[]
  side_bar : boolean = false
  constructor(private http:HttpClient) { }
  
  createTraining(trainingData: Training){
    this.http.post("http://localhost:8082/course",trainingData)
    .subscribe();
  }

  getTraining(){
    return this.http.get<any[]>("http://localhost:8082/trainings");
  }

  getTrainingById(id : number){
    return this.http.get<any>("http://localhost:8082/trainings/"+id);
  }
 
  updateTraining(id : number,trainingData : Training){
    this.http.put("http://localhost:8082/trainings/"+id,trainingData).subscribe();
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
