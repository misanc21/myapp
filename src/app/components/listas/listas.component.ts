import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})

export class ListasComponent {
  @ViewChild(IonList) ionLista: IonList;
  @Input() terminada = true
  lista : any[];
  constructor(public deseosService : DeseosService,
              private router: Router,
              private alertController: AlertController) { 
              }


  seleccionarLista(item:Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${item.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
    }
  }

  borrarLista(item : Lista){
    console.log(item)
    this.deseosService.deleteLista(item)
  }

  async editarLista(lista: Lista){
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs:[
        {
          name: 'titulo',
          type:'text',
          placeholder:'nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            this.ionLista.closeSlidingItems()
          }
        },
        {
          text: 'Editar',
          handler:(data)=>{
            console.log(data)
            if(data.titulo.length === 0){
              return
            }

            lista.titulo = data.titulo
            this.deseosService.setStorage()
            this.ionLista.closeSlidingItems()
          }
        }
      ]
    })
    alert.present()
  }
}
