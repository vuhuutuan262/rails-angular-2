import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesComponent } from './samples.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SamplesComponent],
  exports: [SamplesComponent]
})
export class MoneyforwardModule{}
