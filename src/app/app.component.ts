import { Component, OnInit } from '@angular/core';
import { CourseConfigService } from './services/course-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public config: CourseConfigService) {}

  ngOnInit() {
    this.config.load();
  }
}
