import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  checker:boolean = true;
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;

  constructor() { }

  ngOnInit(): void {
  }

}
