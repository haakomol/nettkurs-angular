import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter-select-box',
  templateUrl: './chapter-select-box.component.html',
  styleUrls: ['./chapter-select-box.component.scss']
})
export class ChapterSelectBoxComponent implements OnInit, OnChanges {
  @Input() chapterNumber: number;
  @Input() chapterTitle: string;

  public chapterTitleHtml;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const chapterTitleInputChanges: SimpleChange = changes.chapterTitle;
    const chapterTitleRaw = chapterTitleInputChanges.currentValue;
    this.chapterTitleHtml = this.domSanitizer.bypassSecurityTrustHtml(chapterTitleRaw);
  }

}
