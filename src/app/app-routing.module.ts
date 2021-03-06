import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page/front-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'kap/:id', loadChildren: './course-content/course-content.module#CourseContentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
