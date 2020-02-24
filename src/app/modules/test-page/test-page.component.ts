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

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Test Title';
    this.color = 'white';
  }

  alertTitle() {
    alert('The title is: ' + this.title);
  }

}
