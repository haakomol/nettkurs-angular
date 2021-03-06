import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseContentComponent } from './course-content/course-content.component';

const routes: Routes = [
  { path: '**', component: CourseContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseContentRoutingModule { }
