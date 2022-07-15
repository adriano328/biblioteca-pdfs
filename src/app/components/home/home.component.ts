import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items!: MenuItem[];
  
  constructor(
      
  ) { }

  ngOnInit(): void {

    this.items = [{
      label: 'Categorias',
      items: [
          {label: 'Liderança'},
       
          {label: 'Oração'},
          {label: 'Cura Interior'},
          {label: 'Infantil'},
          {label: 'Biografias'},
          {label: 'Devocionais'},
          {label: 'Vida Cristã'},
          {label: 'Casamento'},
          {label: 'Estudo Biblico'},
          {label: 'Sexo e Sexualidade'},
          {label: 'Familia'},
          {label: 'Libertação'},

      ]
  },
    {
      label: 'Autores',
      items:[
        {label: 'A. A. Hodge'},
        {label: 'Abraham Kuyper'},
      ]
    }
  ];
}
}

