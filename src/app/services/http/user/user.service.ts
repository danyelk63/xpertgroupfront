import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EndpointService } from '@services/endpoint/endpoint.service';
import { IUser, User } from '../../../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpUserService {
  config = {
    create: '/users/create',
    login: '/users/login',
  };

  httpClientService: HttpClient = inject(HttpClient);
  endpointService = inject(EndpointService);

  create(data: Partial<User>) {
    return this.httpClientService
      .post<IUser>(
        this.endpointService.getUrl(this.config.create),
        data
      )
      .pipe(
        map((user: IUser) => new User(user))
      );
  }

  login(data: Partial<User>) {
    return this.httpClientService
      .post<{ token: string; data: IUser }>(
        this.endpointService.getUrl(this.config.login),
        data
      )
      .pipe(
        map((resp) => ({
          token: resp.token,
          data: new User(resp.data),
        }))
      );
  }
}
