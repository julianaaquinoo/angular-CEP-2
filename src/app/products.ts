export interface Product {
  id: number;
  cep: number;
  logradouro: string;
  cidade: string;
  bairro: string;
  uf: string;
}

export const products = [
  {
    id: 1,
    cep: 18105000,
    logradouro: 'Parana',
    cidade: 'sorocaba',
    bairro: 'Cajuru do Sul',
    uf: 'são paulo',
  },
  {
    id: 2,
    cep: 93212260,
    logradouro: 'hugo gerdau',
    cidade: 'sapucaia do sul',
    bairro: 'são jorge',
    uf: 'sapucaia do sul',
  },
  {
    id: 3,
    cep: 91360-390,
    logradouro: 'PDoutor Dário de Bittencourt',
    cidade: 'porto alegre',
    bairro: 'Jardim Europa',
    uf: 'porto alegre',
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/