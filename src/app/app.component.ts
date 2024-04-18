import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFromComponent } from './components/my-from/my-from.component';
import { ShowFromDetailComponent } from './components/show-from-detail/show-from-detail.component';
import { BtnFunctionComponent } from './components/btn-function/btn-function.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFromComponent, ShowFromDetailComponent, BtnFunctionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Angular Forms';
}
