// import { Trainings } from './training.model';
import { Time } from "@angular/common";

export class Training{
    trainingId: string;
    title: string; 
    scheduledfrom : Date;
    scheduledto  : Date;
    hoursPerDay: number;
    from : Time;
    to : Time;
}
// export class Training{
//     trainingId: number;
//     title: string;
//     durationDays: number;
//     //isTheory: boolean = false;
//     handsOn: boolean = false;
//     theorySessionHoursPerDay: number;
//     prerequisites: string;
//     technologyStack: string;

    
// }