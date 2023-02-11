import { Component } from '@angular/core';

interface groupedCategory {
  category: string;
  products: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'angular-play-with-data';
  total = 0.00;
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

  categories: groupedCategory[] = [];


  public sortProductsDesc(): void {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  public sortProductsAsc() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }

  filterBy(nameInput: HTMLInputElement) {
    if (nameInput.value) {
      this.products = this.products.filter(p => p.name === nameInput.value)
    }
  }

  showGroup() {
    //first group the products by category
    const grouped = this.products.reduce((acc: any, curr) => {
      let key = curr.category;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});

    //get the categories and product related.
    this.categories = Object.keys(grouped).map(key => ({
      category: key,
      products: grouped[key]
    }));

  }

  showTotal() {
    this.total = this.products.reduce((acc, curr) => acc + curr.price, 0);
  }

}
