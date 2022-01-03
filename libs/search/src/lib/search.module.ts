import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'filter',component:FilterComponent}
]

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  declarations: [
    FilterComponent,
    HomeComponent
  ],
  exports: [
    FilterComponent,
    HomeComponent
  ],
})
export class SearchModule {}
