import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getAllCategories(): Observable<ListResponseModel<Category>> { // asenkron için Observable tipinde dönüyoeruz
    return this.httpClient.get<ListResponseModel<Category>>("https://localhost:44314/Api/categories/GetAll");
  }
  constructor(private httpClient: HttpClient) { }
}
