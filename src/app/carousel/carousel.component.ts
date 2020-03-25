import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  urlImagenes = 'assets/Imagenes/';
  images = [
    {
      rutaImagen :'3kayakYPresa.jpeg',
      textoImagen : '',
      // textoImagen : 'randomText',
      nombreImagen:''
      // nombreImagen:'NombreImagen'
    },
    {
      rutaImagen :'arbolRosado.jpeg',
      textoImagen : '',
      // textoImagen : 'randomText',
      nombreImagen:''
      // nombreImagen:'NombreImagen'
    },
    {
      rutaImagen :'tunel.jpeg',
      textoImagen : '',
      // textoImagen : 'randomText',
      nombreImagen:''
      // nombreImagen:'NombreImagen'
    },
  ]
  // .map((img) => this.urlImagenes+img);

  constructor() { }

  ngOnInit(): void {
  }

}
