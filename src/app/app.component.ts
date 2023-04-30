import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = 'Angular email CRUD';
  msg: string = '';
  cards = [ 
    {'name': 'Mago de Hielo', cardType:'Tropa', 'email': 'Mago_Hielo@live.com'},
    {'name': 'Bola de Fuego', cardType:'Hechizo', 'email': 'Bola_de_Fuego@live.com'},
    {'name': 'Torre Tesla', cardType:'Estructura', 'email': 'Torre_Tesla@live.com'}
];


myValue:number = 0;
model:any = { };
model2:any = { };

addCard() : void{
  this.cards.push(this.model);
  this.model = {};
  alert('Se Agrego la Carta');
}
deleteCard(i = this.cards.length):void{
  var answer = confirm('estas seguro de querer eliminar la carta?');
  if(answer == true){
    this.cards.splice(i,1);
    alert('Se elimino la Carta');
  }else {
    alert('la carta no se elimino')
  }
}

editCard(i = this.cards.length): void{
  this.model2.name = this.cards[i].name;
  this.model2.cardType = this.cards[i].cardType;
  this.model2.email = this.cards[i].email;
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
  alert('Se actualizo la Carta');
}

closeAlert(): void{
  
}
}
