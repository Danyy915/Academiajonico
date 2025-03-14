import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isSticky =false;
  title = 'Jonico';
  menuOpen:boolean = false;
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isSticky = window.scrollY > 100;
    }

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }




}
