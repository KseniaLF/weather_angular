import { latLng, tileLayer, marker, icon } from 'leaflet';
import { Injectable } from '@angular/core';
import { User } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}

  mapOptions: any = {};
  layer: any = [];

  initializeMap(user: User): void {
    const coordinates = user?.location?.coordinates;
    const latitude = parseFloat(coordinates.latitude) || 0;
    const longitude = parseFloat(coordinates.longitude) || 0;

    const avatar = user?.picture?.large;

    if (coordinates) {
      this.mapOptions = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '...',
          }),
        ],
        zoom: 5,
        center: latLng(latitude, longitude),
      };

      this.layer = marker([latitude, longitude], {
        icon: icon({
          iconUrl: avatar,
          iconSize: [40, 40],
        }),
      });
    }
  }
}
