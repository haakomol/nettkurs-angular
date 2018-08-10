import { Component, OnInit } from '@angular/core';
import { CourseConfigService } from '../../services/course-config.service';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {

  constructor(public config: CourseConfigService) { }

  ngOnInit() {
  }

}
