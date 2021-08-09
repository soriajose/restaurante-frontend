import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-create-restaurante',
  templateUrl: './create-restaurante.page.html',
  styleUrls: ['./create-restaurante.page.scss'],
})
export class CreateRestaurantePage implements OnInit {

  restaurante: Restaurante = {
    id: 0,
    nombre: "",
    direccion: "",
    descripcion: "",
    imagen: "",
    precio: ""
  }

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
  }


  crearRestaurante(){
    this.restauranteService.postRestaurante(this.restaurante).subscribe(
      respuesta => {
        console.log('Post restaurante', respuesta);
      }
    );
  }
  

}
