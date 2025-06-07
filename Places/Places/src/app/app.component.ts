import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { NewPlaceComponent} from './components/new-place/new-place.component'
import { PlaceListComponent } from "./components/place-list/place-list.component";
import { PlaceMapComponent } from "./components/place-map/place-map.component";
import { ReactiveFormsModule } from '@angular/forms'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NewPlaceComponent, PlaceListComponent, PlaceMapComponent, ReactiveFormsModule, LeafletModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'places';
}
