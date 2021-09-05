import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {


  public author1: Author

  constructor() { 
    this.author1 = {
      nombre: "David",
      apellido: "Muñoz",
      edad: 34,
    
      
    }
  }

  ngOnInit(): void {
    
  }
  enviar(nuevoNombre: HTMLInputElement){
    console.log(this.author1.nombre);
    this.author1.nombre = nuevoNombre.value;
    console.log((this.author1.nombre));
    
  }  


}

