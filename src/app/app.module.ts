import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftComponent } from './common/component/left.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { TheRollingStonesComponent } from './the-rolling-stones/the-rolling-stones.component';
import { TheBeatlesComponent } from './the-beatles/the-beatles.component';
import { QueenComponent } from './queen/queen.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent},
  {path: 'bar', component: BarComponent},
  {path: 'foo', component: FooComponent},
  {path: 'the-rolling-stones', component: TheRollingStonesComponent},
  {path: 'the-beatles', component: TheBeatlesComponent },
  {path: 'queen', component: QueenComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,

    DashboardComponent,
    HomeComponent,
    FooComponent,
    BarComponent,
    TheRollingStonesComponent,
    TheBeatlesComponent,
    QueenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
