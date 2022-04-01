import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import 'animate.css';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RequestdemoComponent } from './requestdemo/requestdemo.component';
import { MatDividerModule } from '@angular/material/divider';
import { Renderer2 } from '@angular/core';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  // {
  //   path:'',
  //   component: NavbarComponent
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'requestdemo',
    component: RequestdemoComponent,
  },
  {
    path: 'about',
    component: AboutusComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RequestdemoComponent,
    AboutusComponent,
    SubmittedComponent,
    FooterComponent,
  ],
  entryComponents: [SubmittedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
