import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { Restaurante } from '../../interfaces/restaurante';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  restaurantes: Restaurante[] = [];

  constructor(private restauranteService: RestauranteService, private router: Router) { }

  ngOnInit() {
    this.restauranteService.getRestaurantes().subscribe(
      respuesta => {
        this.restaurantes = respuesta.data;
        console.log('Restaurantes', this.restaurantes)
      }
    );
  }


  irUpdateRestaurante(id: number){
    this.router.navigate(['update-restaurante', id]);
  }


  eliminarRestaurante(id: number){
    this.restauranteService.deleteRestaurante(id).subscribe(
      respuesta => {
        console.log("Se elimino", respuesta);
      }
    );
  }

}
