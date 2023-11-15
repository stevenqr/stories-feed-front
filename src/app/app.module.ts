import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoriesFeedModule } from './stories-feed/stories-feed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoriesFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
