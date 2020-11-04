import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista[], completado:boolean=true): Lista[] {
    return completado ? 
     listas.filter(lista => lista.terminada === true)
    :
     listas.filter(lista => lista.terminada === false)
  }

}
