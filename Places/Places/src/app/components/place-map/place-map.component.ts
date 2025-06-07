import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-place-map',
  templateUrl: './place-map.component.html',
  styleUrls: ['./place-map.component.css']
})
export class PlaceMapComponent implements OnInit {
  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Configurar el mapa
    this.map = L.map('map').setView([40.416775, -3.703790], 5); // Coordenadas de Madrid

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Añadir un marcador (opcional)
    L.marker([40.416775, -3.703790])
      .addTo(this.map)
      .bindPopup('¡Hola desde Madrid!')
      .openPopup();
  }
}