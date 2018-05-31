import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";

// Angular fire modules
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { TableComponent } from "./components/detail/table/table.component";
import { DetailComponent } from "./components/detail/detail.component";
import { FormComponent } from "./components/detail/form/form.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PiechartComponent } from './components/dashboard/piechart/piechart.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailComponent,
    FormComponent,
    NavbarComponent,
    DashboardComponent,
    PiechartComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular fire modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NgxChartsModule
  ],
  entryComponents: [FormComponent, PiechartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
