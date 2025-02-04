import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DebounceInputComponent } from './components/debounce-input/debounce-input.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'debounceroute', component: DebounceInputComponent },
  { path: 'infinitescroll', component: InfiniteScrollComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
