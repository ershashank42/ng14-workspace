import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getNameData(f: string,l: string) {
    return f + " " + l;
  }
}
