import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css'],
  standalone: true
})
export class LazyLoadedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
