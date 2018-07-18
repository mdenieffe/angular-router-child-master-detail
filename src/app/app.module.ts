import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LessonsModule} from './lessons/lessons.module';

const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    LessonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
