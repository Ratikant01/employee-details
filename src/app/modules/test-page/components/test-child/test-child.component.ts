import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  @Input()
  title: string;
  @Output()
  clickCounterEvent = new EventEmitter<number>();
  clickCounter: number;

  constructor() {
  }

  ngOnInit(): void {
    this.clickCounter = 0;
  }

  increaseClickCounter() {
    this.clickCounter++;
    this.clickCounterEvent.emit(this.clickCounter);
  }
}
