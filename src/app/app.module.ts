import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatTableModule, MatPaginatorModule, MatCardModule, MatSelectModule, MatSortModule
} from '@angular/material';
import { HomeComponent } from './home-component/home-component.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SelectComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule,
    FormsModule,
    MatButtonModule, MatCardModule, MatIconModule,
    MatPaginatorModule, MatSelectModule, MatSidenavModule,
    MatSortModule, MatToolbarModule, MatTableModule,MatListModule,
  MatMenuModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
