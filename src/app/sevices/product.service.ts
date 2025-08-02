import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  /*
   1) Eğer constructor içinde private (veya public, protected) yazarsan 
   bu değişken otomatik olarak class’ın bir field'ı olur 
   ve this.httpClient şeklinde erişebilirsin. Aksi takdirde sadece 
   constructor içinde geçerli bir parametre olur.
  
   TypeScript de construtor içerisinde tanımladıgınız değişken
   sanki classın içerisinde tanımladıgınız değisken gibidir yani
   gelip tekrar classın içerisinde tanımlamamıza gerek yok
    */
  getAllProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>("https://localhost:44314/Api/Products/GetAll");
    /* Asenkron calısabilmek için metodun donus tipini Observable yapıyoruz
    metodun geri dönüş tipi "Observable<ProductResponseModel>" Subscribe olunabilir bir responseModel döneceksin anlamına geliyor
    get metodu ile api'den gelen veriyi ProductResponseModel tipine Mapple(eşleştir-dönüştür)
*/
  }

  getAllProductsByCategoryId(categoryId: number):Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>("https://localhost:44314/api/products/getbycategory?categoryId=" + categoryId);
  }
}
