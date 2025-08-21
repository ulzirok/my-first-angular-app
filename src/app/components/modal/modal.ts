import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal-service';

@Component({
  selector: 'app-modal',
  imports: [TitleCasePipe],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal{
  @Input() title!: string

  constructor(public modalService: ModalService) { }
  
}
