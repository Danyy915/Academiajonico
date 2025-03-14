import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  currentIndex = 0;
  backgrounds = [
    'url("banner.png")',
     'url("banner2.png")',
    // Agrega más URLs de imágenes según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
    const banner = document.querySelector('.banner');
    this.changeBackground(banner);
    setInterval(() => this.changeBackground(banner), 7500);
  }

  changeBackground(banner: any) {
    this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
    banner.style.backgroundImage = this.backgrounds[this.currentIndex];
  }

  Cursos = [
    { id: 1, name: 'Canto', image: '/academiaJonico/canto.jpeg' },
    { id: 2, name: 'Bateria', image: '/academiaJonico/bateria.jpg' },
    { id: 3, name: 'Piano',  image: '/academiaJonico/piano.jpg' },
    { id: 4, name: 'Guitarra',  image: '/academiaJonico/guitarra.jpg' },
    { id: 5, name: 'Violin',  image: '/academiaJonico/violin.jpg' },
    { id: 6, name: 'Acordeon',  price: 80, image: '/academiaJonico/acordeon.jpg' },
    { id: 7, name: 'Teclado', image: '/academiaJonico/teclado.jpeg' },

  ];
}
