import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpCatService } from '@services/http/cat/cat.service';
import {
  Cat,
  ICatImageResponse as ICatImage,
  ICatListItem,
} from 'src/app/models/cat.model';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    MatExpansionModule,
    CarouselModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  httpCatService = inject(HttpCatService);

  cats: ICatListItem[] = [];
  catImages: ICatImage[] = [];
  cat: Cat | undefined = undefined;

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    nav: true,
    navText: [
      '<i class="material-icons">chevron_left</i>',
      '<i class="material-icons">chevron_right</i>',
    ],
    center: false,
    startPosition: 0,
    items: 2.25,
  };

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds() {
    this.httpCatService.getAll().subscribe({
      next: (cats) => {
        this.cats = cats;
      },
      error: (error) => {
        console.error('Error fetching breeds:', error);
      },
    });
  }

  getBreedById(breedId: string) {
    this.httpCatService.get(breedId).subscribe({
      next: (cat) => {
        this.cat = cat;
        this.getImgByBreed();
      },
      error: (error) => {
        console.error('Error fetching breeds:', error);
      },
    });
  }

  getImgByBreed() {
    if (this.cat) {
      this.httpCatService.getImageByBreed(this.cat.id).subscribe({
        next: (catImages) => {
          this.catImages = catImages;
        },
        error: (error) => {
          console.error('Error fetching breeds:', error);
        },
      });
    }
  }

  openPanel(id: string) {
    this.catImages = [];
    this.getBreedById(id);
  }
}
