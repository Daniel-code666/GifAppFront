import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { GifTableComponent } from './components/gif-table/gif-table.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GifAddComponent } from './components/gif-add/gif-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GifTableComponent,
    GifDetailsComponent,
    FooterComponent,
    HeaderComponent,
    GifAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
