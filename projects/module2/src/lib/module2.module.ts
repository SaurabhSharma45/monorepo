import { NgModule } from '@angular/core';
import { Module2Component } from './module2.component';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [Module2Component, AbcComponent],
  imports: [
  ],
  exports: [Module2Component,AbcComponent]
})
export class Module2Module { }
