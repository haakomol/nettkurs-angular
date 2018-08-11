import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-katex',
  templateUrl: './custom-katex.component.html',
  styleUrls: ['./custom-katex.component.scss']
})
export class CustomKatexComponent implements OnInit {
  @Input() equation: string;

  constructor() { }

  ngOnInit() {
  }

}
