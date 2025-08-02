import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value + (value * rate / 100);
  }
     /*
     buradaki value -> dönüşüm yapacağımız property, rate ise ilk parametre oluyor.
     Eğer rate sonra bakşa isimli bir parametre olsaydı sırasıyla 2. parametre ve 3. parametre diye gidecekti
      */
}
