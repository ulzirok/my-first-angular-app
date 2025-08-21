import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Product } from './components/product/product';
import { IProduct } from './models/product';
import { products as data} from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, Product],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('my-first-angular-app');
  
  products: IProduct[] = data
}
