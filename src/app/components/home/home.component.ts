import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = '';
  string: string = "hello world";
  array: Array<number> = [4,3,1,8,2];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.name = this.dataService.getNameData("Shashank", "Agarwal");
  }

}
