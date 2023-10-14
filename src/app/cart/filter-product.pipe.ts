import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.filter((ele)=>ele.count>0);
  }

}
