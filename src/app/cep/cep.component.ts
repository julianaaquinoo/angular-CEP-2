import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})

export class CepComponent {

  items = this.cepService.getItems();

  checkoutForm = this.formBuilder.group({
    cep: '',
    address: ''
  });

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cepService.clearCep();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
