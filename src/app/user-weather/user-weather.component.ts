import { Component, Input } from '@angular/core';
import { User } from '../users/users.component';

@Component({
  selector: 'app-user-weather',
  templateUrl: './user-weather.component.html',
  styleUrls: ['./user-weather.component.css'],
})
export class UserWeatherComponent {
  @Input() user?: User;
}
