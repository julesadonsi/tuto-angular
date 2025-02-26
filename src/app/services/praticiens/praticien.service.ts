import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Praticien } from '../../../models/praticiens';
import { PRATICIENTS_API_URL } from '../../../constant';

@Injectable({
  providedIn: 'root',
})
export class PraticienService {
  constructor(private readonly httpClient: HttpClient) {}

  public getPratiens(): Observable<Praticien[]> {
    return this.httpClient.get<Praticien[]>(PRATICIENTS_API_URL);
  }
}
