import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-cartas',
  templateUrl: './inicio-cartas.component.html',
  styleUrls: ['./inicio-cartas.component.css']
})
export class InicioCartasComponent {
  title: string = 'Angular CRUD';
  msg: string = "Encantado de Informarte";
  cards = [ 
    {'name': 'Mago de Hielo', cardType:'Tropa', 'descripcion': 'Mago que congela', 'email': 'Mago_Hielo@live.com'},
    {'name': 'Bola de Fuego', cardType:'Hechizo', 'descripcion': 'Bola de fuego del cielo', 'email': 'Bola_de_Fuego@live.com'},
    {'name': 'Torre Tesla', cardType:'Estructura', 'descripcion': 'Torre que se esconde hasta ver un enemigo', 'email': 'Torre_Tesla@live.com'}
];


myValue:number = 0;
model:any = { };
model2:any = { };

addCard() : void{
  this.cards.push(this.model);
  this.model = {};
  this.msg = "Se Agrego la Carta";
  //API REST Firebase
}
deleteCard(i = this.cards.length):void{
  var answer = confirm('estas seguro de querer eliminar la carta?');
  if(answer == true){
    this.cards.splice(i,1);
    this.msg = "Se elimino la Carta";
  }else {
    this.msg = "La carta no se elimino";
  }
}

editCard(i = this.cards.length): void{
  this.model2.name = this.cards[i].name;
  this.model2.cardType = this.cards[i].cardType;
  this.model2.descripcion = this.cards[i].descripcion;
  this.myValue = i;
}

updateCard():void{
  let i = this.myValue;
  for( let j = 0 ; j <this.cards.length; j++){
    if(i == j){
      this.cards[i] = this.model2;
      this.model2 = {};
    }
  }
  this.msg = "Se actualizo la Carta";
}
}
