import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  title: string;
  color: string;
  today = new Date();
  clickCounter: number;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Test Title';
    this.color = 'white';
    this.clickCounter = 0;
  }

  alertTitle() {
    alert('The title is: ' + this.title);
  }

}
