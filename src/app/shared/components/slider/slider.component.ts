import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSlide(el: HTMLElement): void {
    el.scrollIntoView({ behavior: "smooth",inline:'start' });
  }

}
