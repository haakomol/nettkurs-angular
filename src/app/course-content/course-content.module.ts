import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentRoutingModule } from './course-content-routing.module';
import { CourseContentComponent } from './course-content/course-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CourseContentRoutingModule,
    SharedModule
  ],
  declarations: [CourseContentComponent]
})
export class CourseContentModule { }
