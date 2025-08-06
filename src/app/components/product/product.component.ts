import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/sevices/cart.service';
import { ProductService } from 'src/app/sevices/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded: boolean = false;
  fiterProductName: string = "";
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute
    , private toastrService: ToastrService, private cartService: CartService
  )//Angular bizim yerimize DI yapıyor
  { }
  /*
  ActivatedRoute → Aktif route'u temsil eder, yani o anki URL adresine ait bilgileri taşır.
  params → Route üzerindeki parametreleri verir (örnek: /products/5 → { id: 5 })
  */

  ngOnInit(): void {    // component açıldıgında hemen calısacak metotdur
    // getAllProductsByCategoryId() metodu ve getAllProducts() metodu Observable tipinde döndüğü için
    // subscribe oluyoruz
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) { // Eğer aktif URL adresinde categoryId isminde parametre varsa o zaman çağrılacak metot
        this.getAllProductsByCategoryId(params["categoryId"]);
      }
      else {
        this.getAllProducts();
      }
    })

  }

  getAllProducts() {
    console.log("api request başladı")
    this.productService.getAllProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
      console.log("api request bitti")
      /*
   productService.getAllProducts() metodu Observable dondurdugu ıcın burada subscribe olmamız
   gerekiyor çünkü bu metodu asenkron calıstırabilmek için subscribe() kullanıyoruz
    */
    })
  }

  getAllProductsByCategoryId(categoryId: number) {
    console.log("api request başladı")

    this.productService.getAllProductsByCategoryId(categoryId).subscribe(reponse => {
      this.products = reponse.data;
      this.dataLoaded = true;
      console.log("api request bitti")
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toastrService.success("Başarıyla Sepete Eklendi", product.productName);
    console.log(product);
  }

}
