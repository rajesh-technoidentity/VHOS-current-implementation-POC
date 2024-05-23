import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
