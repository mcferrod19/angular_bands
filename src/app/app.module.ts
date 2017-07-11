import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftComponent } from './common/component/left.component';

import { BarPage } from './pages/bar/bar';
import { FooPage } from './pages/foo/foo';
import { QueenPage } from './pages/queen/queen';
import { TheBeatlesPage } from './pages/the-beatles/the-beatles';
import { TheRollingStonesPage } from './pages/the-rolling-stones/the-rolling-stones';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,

    BarPage,
    FooPage,
    QueenPage,
    TheBeatlesPage,
    TheRollingStonesPage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
