import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page/front-page.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { ChapterSelectSectionComponent } from './chapter-select-section/chapter-select-section.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [
    FrontPageComponent,
    WelcomeSectionComponent,
    ChapterSelectSectionComponent,
    LoadingComponent
  ],
  exports: [
    FrontPageComponent
  ]
})
export class FrontPageModule { }
