import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProOneComponent } from './pro-one/pro-one.component'
import { HttpClientModule } from '@angular/common/http'
import { MatChipsModule } from '@angular/material/chips'

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
@NgModule({
  declarations: [AppComponent, DashboardComponent, ProOneComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
