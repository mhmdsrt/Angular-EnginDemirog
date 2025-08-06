import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/products';
import { ReponseModel } from '../models/responseModel';

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
/* 
  Bu metot, API'den ürün listesini çekmek için kullanılır.
  Geri dönüş tipi olarak Observable<ListResponseModel<Product>> döner.

  - Observable: Asenkron işlem yapabilmek için kullanılır. API'den veri gelinceye kadar bekler ve veri geldiğinde abone olan (subscribe) koda iletir.
  - ListResponseModel<Product>: API'den dönen JSON verisi bu modele dönüştürülür. Genellikle içinde { data: Product[], success: boolean, message: string } gibi bir yapı vardır.
  - httpClient.get<T>(): Bu Angular'ın HttpClient servisidir. Veriyi belirtilen URL'den GET isteği ile çeker ve gelen yanıtı T tipine (burada ListResponseModel<Product>) dönüştürür.
*/

  }

  getAllProductsByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>("https://localhost:44314/api/products/getbycategory?categoryId=" + categoryId);
  }

  addProduct(product: Product):Observable<ReponseModel> {

    return this.httpClient.post<ReponseModel>("https://localhost:44314/api/products/add/", product);
  }
}
