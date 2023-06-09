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
hideUpdate: boolean = true;
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
  .then(() => {
   this.model = {};
   this.msg = "Se Agrego la Carta";    
   this.MostrarCartas();
  })

}

deleteCard(i:number):void{
  this.model2 = Object.assign({},this.cards[i]);
  const cardId = this.model2.id;
  fetch(`https://angular-crud-eec-default-rtdb.firebaseio.com/cards/${this.UserUid}/${cardId}.json?auth=${this.tokenUidCode}`, {
    method: 'DELETE',
  })
  .then(() => {
    this.msg = "Se eliminó la carta";
    this.MostrarCartas();
  })
  .catch(error => console.error(error));
}

MostrarCartas(): object{
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
  })
  return this.cards;
}

editButton(i:number):void {
  this.hideUpdate = false;
  this.model2 = Object.assign({},this.cards[i]);
}

updateCard(): void {
  const cardId = this.model2.id
  console.log('este es el id de model2' + this.model2.id)
  fetch(`https://angular-crud-eec-default-rtdb.firebaseio.com/cards/${this.UserUid}/${cardId}.json?auth=${this.tokenUidCode}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       "name": this.model2.name,
       "cardType": this.model2.cardType,
       "descripcion": this.model2.descripcion        
    })
  })
  .then(() => {
    this.msg = "Se actualizo la carta"
    this.MostrarCartas();
    this.hideUpdate = true;
  })
  .catch(error => console.error(error));
}

CerrarSesion(){
  this.auth.signOut();
  this.router.navigate(['/login']);
  console.log('se cerro sesion')
}
}
