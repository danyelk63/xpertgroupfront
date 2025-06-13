import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setToken(token: string): void {
    try {
      sessionStorage.setItem('token', token);
    } catch (error) {
      console.error('Error setting token in sessionStorage:', error);
    }
  }

  getToken(): string | null {
    try {
      return sessionStorage.getItem('token');
    } catch (error) {
      console.error('Error setting token in sessionStorage:', error);
    }
    return null
  }

  removeToken(): void {
    try {
      sessionStorage.removeItem('token');
    } catch (error) {
      console.error('Error clearing token from sessionStorage:', error);
    }
  }

  set(key: string, value: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Error setting item in sessionStorage with key "${key}":`,
        error
      );
    }
  }

  get(key: string): any {
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(
        `Error getting item from sessionStorage with key "${key}":`,
        error
      );
      return null;
    }
  }

  remove(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(
        `Error removing item from sessionStorage with key "${key}":`,
        error
      );
    }
  }
}
