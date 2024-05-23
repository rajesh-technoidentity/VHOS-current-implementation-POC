import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.isDSP = (window as any).isDSP  
  }
  isDSP = false
  title = 'VHOS';
}
