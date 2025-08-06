import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required], // "" -> default değeri ne olsun?
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required],
    });
  }

  addProduct() {
    if (this.productAddForm.valid) { // eğer form gecerliyse
      /*
       this.productAddForm.value -> Bu kısım, Reactive Form’daki tüm inputların şu anki değerlerini bir nesne (object) olarak döner.
   
    {} → Boş bir nesne oluşturur.
    this.productAddForm.value → formdan gelen değerlerdir.
    Object.assign(target, source) → kaynak nesnedeki verileri hedef nesneye kopyalar.
        */
      let product = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(product).subscribe(response => {
        this.toastrService.success("Ürün eklendi!", "Başarılı");
        return console.log(response);

      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası");
            
          }
        }
      });
    }
    else {
      this.toastrService.error("Girdilerinizi kontrol ediniz!", "Hatalı!");
    }

  }

}
