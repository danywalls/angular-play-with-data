import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-play-with-data';

  products = [
    {
      "id": 1,
      "name": "Product 1",
      "category": "Category A",
      "description": "Description of product 1",
      "price": 9.99
    },
    {
      "id": 2,
      "name": "Product 2",
      "category": "Category B",
      "description": "Description of product 2",
      "price": 19.99
    },
    {
      "id": 3,
      "name": "Product 3",
      "category": "Category A",
      "description": "Description of product 3",
      "price": 29.99
    },
    {
      "id": 4,
      "name": "Product 4",
      "category": "Category C",
      "description": "Description of product 4",
      "price": 39.99
    },
    {
      "id": 5,
      "name": "Product 5",
      "category": "Category B",
      "description": "Description of product 5",
      "price": 49.99
    },
    {
      "id": 6,
      "name": "Product 6",
      "category": "Category A",
      "description": "Description of product 6",
      "price": 59.99
    },
    {
      "id": 7,
      "name": "Product 7",
      "category": "Category C",
      "description": "Description of product 7",
      "price": 69.99
    },
    {
      "id": 8,
      "name": "Product 8",
      "category": "Category B",
      "description": "Description of product 8",
      "price": 79.99
    },
    {
      "id": 9,
      "name": "Product 9",
      "category": "Category A",
      "description": "Description of product 9",
      "price": 89.99
    },
    {
      "id": 10,
      "name": "Product 10",
      "category": "Category C",
      "description": "Description of product 10",
      "price": 99.99
    }
  ]

  sortProducts() {
    this.products = this.products.sort((a, b) => (a.price < b.price) ? 1 : -1);
  }
}
