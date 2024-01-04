import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesFeedListComponent } from './components/stories-feed-list/stories-feed-list.component';
import { MainPageComponent } from './pages/main-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [
    MainPageComponent,
    StoriesFeedListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SkeletonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class StoriesFeedModule { }
