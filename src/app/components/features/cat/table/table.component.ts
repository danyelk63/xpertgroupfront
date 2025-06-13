import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpCatService } from '@services/http/cat/cat.service';
import { Cat } from 'src/app/models/cat.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule, MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  httpCatService = inject(HttpCatService);

  displayedColumns: string[] = [
    'id',
    'name',
    'origin',
    'life',
    'hypoallergenic',
  ];
  dataSource: Cat[] = [];
  filteredDataSource: Cat[] = [];
  filterText: string = '';

  ngOnInit(): void {
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.httpCatService.getAll().subscribe({
      next: (cats: Cat[]) => {
        this.dataSource = cats;
        this.filteredDataSource = cats;
      },
      error: (error) => {
        console.error('Error fetching breeds:', error);
      },
    });
  }

  applyFilter() {
    const filterValue = this.filterText.toLowerCase();
    this.filteredDataSource = this.dataSource.filter((cat) =>
      Object.values(cat).some((value) => {
        if (value) {
          if(value.toString().toLowerCase().includes(filterValue)) {
            return value;
          }
        }
      })
    );
  }
}
