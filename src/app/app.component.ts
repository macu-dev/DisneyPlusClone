import { Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'disney-plus-app';
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const loader = this.renderer.selectRootElement('#loader');
    this.renderer.setStyle(loader, 'display', 'none');
  }
}
