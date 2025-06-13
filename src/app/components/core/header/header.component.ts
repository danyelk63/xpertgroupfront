import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StorageService } from '@services/index';
import { AvatarModule } from 'ngx-avatars';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { IUser } from 'src/app/models/user.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    AvatarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @ViewChild('UserDialog') userDialogTemplate: any;

  storageService = inject(StorageService);
  dialog = inject(MatDialog);

  user: IUser | undefined = undefined;

  ngOnInit(): void {
    const user = this.storageService.get('user');
    if (user) {
      this.user = user;
    }
  }

  openDialog() {
    this.dialog.open(this.userDialogTemplate);
  }

  parseDate(isoDate: string): string {
    const date = new Date(isoDate);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
}
