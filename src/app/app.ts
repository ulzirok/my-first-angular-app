import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-first-angular-app');
}
