import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentRoutingModule } from './course-content-routing.module';
import { CourseContentComponent } from './course-content/course-content.component';

@NgModule({
  imports: [
    CommonModule,
    CourseContentRoutingModule
  ],
  declarations: [CourseContentComponent]
})
export class CourseContentModule { }
