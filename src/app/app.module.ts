import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SortArrayPipe } from './pipes/sort-array.pipe';
import { DebounceDirective } from './directives/debounce.directive';
import { DebounceInputComponent } from './components/debounce-input/debounce-input.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CapitalizePipe,
    SortArrayPipe,
    DebounceDirective,
    DebounceInputComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
