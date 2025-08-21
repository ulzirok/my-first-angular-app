import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorService } from '../../services/error-service';

@Component({
  selector: 'app-global-error',
  imports: [AsyncPipe, NgIf],
  templateUrl: './global-error.html',
  styleUrl: './global-error.scss'
})
export class GlobalError {
  constructor(public errorService: ErrorService) {
    
  }
}
