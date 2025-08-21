import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss'
})
export class CreateProduct {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  
  get title() {
    return this.form.controls.title as FormControl
  }
  
  constructor() {}
  
  submit() {
    console.log(this.form.value);
  }
}
