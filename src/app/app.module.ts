import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// import {BASE_URL, BASE_URL_TOKEN} from "./config";
import {InterceptorService} from "./services/interceptor.service";
import {GithubService} from "./services/github.service";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    GithubService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: 'BASE_URL',
      useValue: 'https://api.github.com/search/repositories?q='
    }

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
