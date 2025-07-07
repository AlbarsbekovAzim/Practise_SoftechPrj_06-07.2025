import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './comp/header';
import { MainPart } from './comp/mainPart';
import { Footer } from './comp/footer';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Header, MainPart, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'softechPrj';
  isDarkered = false;
}
