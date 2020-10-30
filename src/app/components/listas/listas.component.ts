import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})

export class ListasComponent {
  @Input() terminada = true
  lista : any[];
  constructor(public deseosService : DeseosService,
              private router: Router) { }


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
}
