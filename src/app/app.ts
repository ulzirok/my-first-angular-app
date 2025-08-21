import { Component, OnInit, signal, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe, AsyncPipe, NgIf } from '@angular/common';
import { Product } from './components/product/product';
import { GlobalError } from './components/global-error/global-error';
import { IProduct } from './models/product';
import { products } from './data/products';
import { ProductService } from './services/product-service';
import { Observable, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products-pipe';
import { Modal } from './components/modal/modal';
import { CreateProduct } from './components/create-product/create-product';
import { ModalService } from './services/modal-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, Product, AsyncPipe, GlobalError, FormsModule, NgIf, FilterProductsPipe, Modal, CreateProduct],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('my-first-angular-app');
  loading = false
  
  // products: IProduct[] = []
  products$!: Observable<IProduct[]>
  term = ''
  
  constructor(
    public productsService: ProductService,
    public modalService: ModalService) { }
  
  ngOnInit(): void {
    this.loading = true
    
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
  }
}
