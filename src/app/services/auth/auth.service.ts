import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  auth$: Observable<boolean> = this.authSubject.asObservable();

  setAuth(): void {
    this.authSubject.next(true);
  }
}
