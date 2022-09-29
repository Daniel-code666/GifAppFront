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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GifAddComponent } from './components/gif-add/gif-add.component';
import { SiderbarComponent } from './Shared/siderbar/siderbar.component';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GifTableComponent,
    GifDetailsComponent,
    FooterComponent,
    HeaderComponent,
    GifAddComponent,
    SiderbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
