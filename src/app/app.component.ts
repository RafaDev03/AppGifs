import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GifsPageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AppGifsV2';
}
