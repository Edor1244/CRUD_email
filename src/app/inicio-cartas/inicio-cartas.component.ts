import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-inicio-cartas',
  templateUrl: './inicio-cartas.component.html',
  styleUrls: ['./inicio-cartas.component.css']
})
export class InicioCartasComponent {
  title: string = 'Angular CRUD';
  msg: string = "Encantado de Informarte";

constructor(public auth: AngularFireAuth,private router: Router,private db: AngularFireDatabase) {};
cards: any[] = [];
myValue:number = 0;
model:any = { };
model2:any = { };
UserUid = localStorage.getItem('userUid');
tokenUidCode = localStorage.getItem('tokenUid');



addCard() : void{
  fetch(`https://angular-crud-eec-default-rtdb.firebaseio.com/cards/${this.UserUid}.json?auth=${this.tokenUidCode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": this.model.name,
      "cardType": this.model.cardType,
      "descripcion": this.model.descripcion
    })
  })
   this.model = {};
   this.msg = "Se Agrego la Carta";
}
deleteCard(/*i = this.cards.length*/):void{
  // var answer = confirm('estas seguro de querer eliminar la carta?');
  // if(answer == true){
  //   this.cards.splice(i,1);
  //   this.msg = "Se elimino la Carta";
  // }else {
  //   this.msg = "La carta no se elimino";
  // }
}

MostrarCartas(/*i = this.cards.length*/): void{

  fetch(`https://angular-crud-eec-default-rtdb.firebaseio.com/cards/${this.UserUid}.json?auth=${this.tokenUidCode}`)
  .then(response => response.json())
  .then(data => {
    const keys = Object.keys(data);
     this.cards = keys.map(key => ({
      id : key,
      name : data[key].name,
      cardType: data[key].cardType,
      descripcion: data[key].descripcion
    }));
    console.log(this.cards)

  })
  
 /* this.model2.name = this.cards[i].name;
  this.model2.cardType = this.cards[i].cardType;
  this.model2.descripcion = this.cards[i].descripcion;
  this.myValue = i;*/
}

updateCard():void{
  /*let i = this.myValue;
  for( let j = 0 ; j <this.cards.length; j++){
    if(i == j){
      this.cards[i] = this.model2;
      this.model2 = {};
    }
  }
  this.msg = "Se actualizo la Carta";*/
}

CerrarSesion(){
  this.auth.signOut();
  this.router.navigate(['/login']);
  console.log('se cerro sesion')
}
}
