import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 
    this.loadstorage()
  }

  crearLista(titulo:string){
    const nueva = new Lista(titulo)
    this.listas.push(nueva)
    this.setStorage()
    return nueva.id
  }

  getLista(id : string | number){
    id = Number(id)
    return this.listas.find(data => data.id == id)
  }

  setStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas))
  }

  loadstorage(){
    const data = localStorage.getItem('data')
    data ? this.listas = JSON.parse(data) : this.listas = []
  }
}
