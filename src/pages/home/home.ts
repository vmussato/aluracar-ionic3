import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carro } from '../../modelos/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController) {
    this.carros = [
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Uno branco",
        preco: 4000
      },
      {
        nome: "Celta 1.0",
        preco: 10000
      },
      {
        nome: "Ferrari",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
      {
        nome: "Brasilia Amarela",
        preco: 2000
      },
    ];
  }

}
