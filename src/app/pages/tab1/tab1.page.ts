import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  lista : any[];

  constructor
    ( 
      private deseosService: DeseosService,
      private router: Router,
      private alertController : AlertController
    ) {
    this.lista = deseosService.listas;
  }

  async agregarLista(){
    const alert = await this.alertController.create({
      header: 'Nueva lista',
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
            console.log('cancelar')
          }
        },
        {
          text: 'crear',
          handler:(data)=>{
            console.log(data)
            if(data.titulo.length === 0){
              return
            }
            
            const nuevaLista = this.deseosService.crearLista(data.titulo)
            this.router.navigateByUrl(`/tabs/tab1/agregar/${nuevaLista}`);
          }
        }
      ]
    })
    alert.present()
  }

  seleccionarLista(item:Lista){
    this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
  }

}
