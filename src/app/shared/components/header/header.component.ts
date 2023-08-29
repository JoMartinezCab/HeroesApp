import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  public sideBarItems = [
    {label: 'listado', icon:'label', url:'./list'},
    {label: 'Añadir', icon:'add', url:'./new-hero'},
    {label: 'Buscar', icon:'search', url:'./search'}
  ]
}
