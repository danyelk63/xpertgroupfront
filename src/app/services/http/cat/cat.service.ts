import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EndpointService } from '@services/endpoint/endpoint.service';
import { map } from 'rxjs/operators';
import { Cat, ICat, ICatImageResponse, ICatListItem } from 'src/app/models/cat.model';

@Injectable({
  providedIn: 'root',
})
export class HttpCatService {
  config = {
    url: '/cats',
  };

  httpClientService: HttpClient = inject(HttpClient);
  endpointService = inject(EndpointService);

  getAllNames() {
    return this.httpClientService
      .get<ICatListItem[]>(
        this.endpointService.getUrl(this.config.url, "breed-names"),
      )
  }

  getAll() {
    return this.httpClientService
      .get<ICat[]>(
        this.endpointService.getUrl(this.config.url, "breeds"),
      ).pipe(
      map((cats: ICat[]) => cats.map(cat => new Cat(cat)))
    );
  }

  get(id: string) {
    return this.httpClientService
      .get<ICat>(
        this.endpointService.getUrl(this.config.url, `breeds/${id}`),
      ).pipe(
        map((cat: ICat) => new Cat(cat))
      );
  }

  getImageByBreed(breed: string) {
    return this.httpClientService
      .get<ICatImageResponse[]>(
        this.endpointService.getUrl(`${this.config.url}/images/${breed}`),
      )
  }
}
