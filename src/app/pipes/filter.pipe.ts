import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(arr: any[], searchTerm:any) {
    let filteredList : any[] = [];
    if (searchTerm) {
      let newSearchTerm = !isNaN(searchTerm) ? searchTerm.toString() : searchTerm.toString().toUpperCase();
      let prop : string;
      let item : any;
      arr.map(item => {
        let matches = false;
        for (let key in item) {
          prop = isNaN(item[key]) ? item[key].toString().toUpperCase() : item[key].toString();
          matches = matches || (prop.indexOf(newSearchTerm) > -1);
        }
        if(matches){
          filteredList.push(item);
        }
      })
      return filteredList;
    }
    else {
      return arr;
    }
  }

}
