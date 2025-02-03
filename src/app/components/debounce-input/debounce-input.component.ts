import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debounce-input',
  templateUrl: './debounce-input.component.html',
  styleUrls: ['./debounce-input.component.css']
})
export class DebounceInputComponent {

  debounceTimer: number = 5000;

  onSearch(value: any) {
    console.log('🔷 Final debounced value:', value);
  }

}
