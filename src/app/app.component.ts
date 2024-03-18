import { Component, inject } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from 'src/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'getmgaddar';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  async logout() {
    await this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
  }

}
