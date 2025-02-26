import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PraticienService } from './services/praticiens/praticien.service';
import { Praticien } from '../models/praticiens';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tutoriels';
  praticiens = signal<Praticien[]>([]);

  constructor(private readonly praticienService: PraticienService) {}

  ngOnInit() {
    this.praticienService.getPratiens().subscribe({
      next: (responses: Praticien[]) => {
        this.praticiens.set(responses);
      },
      error: (error: HttpErrorResponse) => {},
      complete: () => {},
    });
  }

  ngOnDestroy() {}
}
