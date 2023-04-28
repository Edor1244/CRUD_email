import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = 'Angular_email_CRUD';
  cards = [ 
    {'name': 'Mago de Hielo', cardType:'Tropa', 'email': 'Mago_Hielo@live.com'},
    {'name': 'Bola de Fuego', cardType:'Hechizo', 'email': 'Bola_de_Fuego@live.com'},
    {'name': 'Torre Tesla', cardType:'Estructura', 'email': 'Torre_Tesla@live.com'}
];


myValue:Number = 0;
model:any = { };
model2:any = { };

addCard() : void{
  this.cards.push(this.model);
  this.model = {};
}
deleteCard():void{
}

editCard(i = this.cards.length): void{
  this.model2.name = this.cards[i].name;
  this.model2.cardType = this.cards[i].cardType;
  this.model2.email = this.cards[i].email;
  this.myValue = i;
}

updateCard():void{
  console.log(this.model2)
}
}
