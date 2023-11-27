import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
