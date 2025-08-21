import { Focus } from './../../directives/focus';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";
import { ProductService } from '../../services/product-service';
import { ModalService } from '../../services/modal-service';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, NgIf, Focus],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss'
})
export class CreateProduct {
  constructor(
    private productService: ProductService,
    private modalService: ModalService) {
    
  }
  
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  
  get title() {
    return this.form.controls.title as FormControl
  }
  
  submit() {
    console.log(this.form.value);
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
