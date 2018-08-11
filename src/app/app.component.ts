import { Component, OnInit, Injector } from '@angular/core';
import { CourseConfigService } from './services/course-config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CustomKatexComponent } from './shared/custom-katex/custom-katex.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public config: CourseConfigService,
              private domSanitizer: DomSanitizer,
              private injector: Injector) {

    const CustomKatexElement = createCustomElement(CustomKatexComponent, { injector: injector });
    customElements.define('app-katex', CustomKatexElement);
  }

  ngOnInit() {
    this.config.load();
  }
}
