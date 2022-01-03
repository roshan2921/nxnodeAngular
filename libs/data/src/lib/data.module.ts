import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export interface Todo {
  title: string;
}

@NgModule({
  imports: [CommonModule,HttpClientModule],
})
export class DataModule {}
