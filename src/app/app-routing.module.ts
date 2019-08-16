import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

export const router: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);