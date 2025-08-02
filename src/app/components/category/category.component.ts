import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/sevices/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  click(): any {
    throw new Error('Method not implemented.');
  }

  categories: Category[] = [];
  currentCategory: Category | null = null;  // o anki seçilen category, currentCategory değeri null tipinde veya Category tipindedir
  constructor(private categoryService: CategoryService) { }
  // otomaik DI yapılıyor çünkü Servisler Injectable oldugu ıcın

  ngOnInit(): void {
    this.getAllCategory();

  }

  getAllCategory() {
    this.categoryService.getAllCategories()
      .subscribe(response => {
        this.categories = response.data;
      })
    this.currentCategory = null;

  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active";
    }
    else {
      return "list-group-item ";

    }

  }
  getCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) { // parametreden gelen category seçilen category'e eşitse category'nin arka planını mavi yapmak için kullanılan metot
    if (category == this.currentCategory) {
      return "list-group-item active";
    }
    else {
      return "list-group-item";
    }
  }
}
