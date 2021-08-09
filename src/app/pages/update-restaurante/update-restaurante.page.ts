import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'src/app/interfaces/restaurante';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-update-restaurante',
  templateUrl: './update-restaurante.page.html',
  styleUrls: ['./update-restaurante.page.scss'],
})
export class UpdateRestaurantePage implements OnInit {

  restaurante: Restaurante = {
    id: 0,
  nombre: "",
  direccion: "",
  descripcion: "",
  imagen: "",
  precio: "",
}
  
  constructor(private restauranteService: RestauranteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  updateRestaurante(){

    this.restaurante.id = this.activatedRoute.snapshot.params['id'];

    this.restauranteService.updateRestaurante(this.restaurante.id, this.restaurante).subscribe(
      respuesta => {
        console.log('Se actualizo', respuesta);
      }
    );
  }

  

}
