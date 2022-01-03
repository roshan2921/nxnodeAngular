import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SearchModule } from '@todo/search';
import { FilterComponent } from 'libs/search/src/lib/filter/filter.component';
import { HomeComponent } from 'libs/search/src/lib/home/home.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@todo/ui';
// import { DataModule } from '@todo/data';


const routes:Routes=[
  {path:'filter',component:FilterComponent},
  {path:'home',component:HomeComponent}
]

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,FormsModule,BrowserModule,UiModule,SearchModule,RouterModule.forRoot(routes),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
