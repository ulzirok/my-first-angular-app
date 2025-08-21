import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe, AsyncPipe } from '@angular/common';
import { Product } from './components/product/product';
import { IProduct } from './models/product';
import { products } from './data/products';
import { ProductService } from './services/product-service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, Product, AsyncPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('my-first-angular-app');
  loading = false
  
  // products: IProduct[] = []
  products$!: Observable<IProduct[]>
  
  constructor(private productsService: ProductService) {}
  
  ngOnInit(): void {
    this.loading = true
    
    // this.productsService.getAll().subscribe(products => {
    //   console.log(products);
    //   this.products = products
    //   this.loading = false
    // })
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
