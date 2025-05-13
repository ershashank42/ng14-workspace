import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject<string>();
  getNameData(f: string,l: string) {
    return f + " " + l;
  }

  emitData(value: string) {
    this.subject.next(value);
  }

  getData(): Observable<string> {
    return this.subject.asObservable();
  }
}
