import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from './components/slider/slider.component';

const sharedDeclarables = [
   // vendor
   CommonModule,
   RouterModule,
   // material
   MatCardModule,
   MatButtonModule,
   // local
   // TagListComponent
]

@NgModule({
  declarations: [SliderComponent],
  imports: sharedDeclarables,
  exports: [SliderComponent,MatCardModule,MatButtonModule]
})
export class SharedModule { }
