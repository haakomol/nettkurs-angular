import { Component, OnInit } from '@angular/core';
import { CourseContentService } from '../../services/course-content.service';

@Component({
  selector: 'app-chapter-select-section',
  templateUrl: './chapter-select-section.component.html',
  styleUrls: ['./chapter-select-section.component.scss']
})
export class ChapterSelectSectionComponent implements OnInit {

  constructor(public content: CourseContentService) { }

  ngOnInit() {
    this.content.loadChapters();
  }

}
