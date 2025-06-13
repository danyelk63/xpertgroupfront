import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@core/header/header.component';
import { StorageService } from './services';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  storageService = inject(StorageService);
  authService = inject(AuthService);
  cdr = inject(ChangeDetectorRef);

  title = 'front';
  isLogged = false;

  ngOnInit(): void {
    this.authService.auth$.subscribe({
      next: () => {
        if (this.storageService.getToken()) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
        this.cdr.detectChanges();
      },
    });
  }
}
