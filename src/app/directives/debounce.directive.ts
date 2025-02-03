import { Directive, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective {
  @Input() debounceTime = 300; // Default debounce time
  @Output() debounced = new EventEmitter<string>();

  private inputSubject = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    this.inputSubject.pipe(debounceTime(this.debounceTime)).subscribe(value => {
      this.debounced.emit(value);
    });
  }

  @HostListener('input', ['$event.target.value'])
  onSearch(value: string) {
    this.inputSubject.next(value);
  }
}
