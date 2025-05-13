import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = '';
  string: string = "hello world";
  array: Array<number> = [4,3,1,8,2];
  userForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.name = this.dataService.getNameData("Shashank", "Agarwal");
  }


  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Values:', this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
