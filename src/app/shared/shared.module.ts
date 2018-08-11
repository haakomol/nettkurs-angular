import { NgModule } from '@angular/core';

import { KatexModule } from 'ng-katex';

import { CustomKatexComponent } from './custom-katex/custom-katex.component';

@NgModule({
  imports: [KatexModule],
  declarations: [CustomKatexComponent],
  exports: [CustomKatexComponent],
  entryComponents: [CustomKatexComponent]
})
export class SharedModule { }
