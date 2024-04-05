import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFromComponent } from './components/my-from/my-from.component';
import { ShowFromDetailComponent } from './components/show-from-detail/show-from-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFromComponent, ShowFromDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Angular Forms';
}
