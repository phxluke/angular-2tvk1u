import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, routes],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
