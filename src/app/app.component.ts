import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng14-workspace';
  subscription: Subscription;
  message: string = '';
  counter: number = 0;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getData().subscribe({
      next: (value) => {
        this.message = value;
      }
    });
  }

  sendData() {
    this.dataService.emitData("New data: " + this.counter);
    this.counter++;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
