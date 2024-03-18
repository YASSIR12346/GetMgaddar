import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/auth/auth.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { EmailvalidatorDirective } from './Validators/emailvalidator.directive';
import { GoalComponent } from './goal/goal.component';
@NgModule({
    declarations: [AppComponent, EmailvalidatorDirective, GoalComponent],
    exports: [AngularFireModule],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        MatSidenavModule,MatListModule, MatButtonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, CommonModule,

    ]
})
export class AppModule { }
