import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class Product {
  @Input() product!: IProduct
  
  details: boolean = false
}
