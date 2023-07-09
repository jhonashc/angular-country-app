import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onSearchValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounceValue: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((debouncerValue) => this.onDebounceValue.emit(debouncerValue));
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitSearchValue(value: string): void {
    if (!value) return;

    value = value.trim().toLowerCase();

    this.onSearchValue.emit(value);
  }

  onKeyPress(value: string): void {
    this.debouncer.next(value);
  }
}
