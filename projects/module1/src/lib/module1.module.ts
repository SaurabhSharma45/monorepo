import { NgModule } from '@angular/core';
import { Module1Component } from './module1.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [Module1Component,TestComponent],
  imports: [
  ],
  exports: [Module1Component,TestComponent]
})
export class Module1Module { }
