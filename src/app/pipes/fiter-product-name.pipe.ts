import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products';

@Pipe({
  name: 'fiterProductName'
})
export class FiterProductNamePipe implements PipeTransform {

  transform(value: Product[], fiterProductName: string): Product[] {

    fiterProductName = fiterProductName ? fiterProductName.toLocaleLowerCase() : "";
    /*
    Eğer filtrelenecek "fiterProductName" değeri varsa küçük harfe çevir yoksa boş string değerini ata
    */

    return fiterProductName
      ? value.filter((product: Product) =>
        product.productName.toLocaleLowerCase().includes(fiterProductName)) : value

    /*
    eğer fiterProductName varsa Product[] dizisi olan value'i filtrele,
    filtrelerken her bir product için productName değerini küçük harfe çevir ve 
    küçük harflere çevrilmiş "fiterProductName" değeri geçiyorsa includes() metodu true döner
     */
  }
}


