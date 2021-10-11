import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column: string, direction: string) {
    let sortedArr: any[] = [];
    sortedArr = direction === "asc" ? this.sortAscending(arr, column) : this.sortDescending(arr, column);
    return sortedArr;
  }

  sortAscending(arr: any[], column: string) {
   arr.sort((a, b) => {
      if (a[column] > b[column]) {
        return 1;
      }
      if (a[column] < b[column]) {
        return -1;
      }
      return 0;
    })
    return arr;
    
  }

  sortDescending(arr: any[], column: string) {
    arr.sort((a, b) => {
      if (a[column] < b[column]) {
        return 1;
      }
      if (a[column] > b[column]) {
        return -1;
      }
      return 0;
    })
    return arr;
  }

}
