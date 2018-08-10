import { Component, OnInit } from '@angular/core';
import { CourseConfigService } from '../../services/course-config.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor(public config: CourseConfigService) { }

  ngOnInit() {
  }

}
