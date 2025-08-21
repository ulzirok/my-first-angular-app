import { IProduct } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../data/products';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  }

}
