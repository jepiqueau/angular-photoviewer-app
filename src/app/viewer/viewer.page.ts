import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-viewer',
  templateUrl: 'viewer.page.html',
  styleUrls: ['viewer.page.scss'],
})
export class ViewerPage  implements OnInit{
  imageList: any[] = [];
  mode: string;
  startFrom: number;

  constructor(private location: Location,
              private actRoute: ActivatedRoute) {
    this.mode = this.actRoute.snapshot.params.mode;
  }
  async ngOnInit() {
    this.imageList = [
      {url: 'https://i.ibb.co/wBYDxLq/beach.jpg', title: 'Beach Houses'},
      {url: 'https://i.ibb.co/gM5NNJX/butterfly.jpg', title: 'Butterfly'},
      {url: 'https://i.ibb.co/10fFGkZ/car-race.jpg', title: 'Car Racing'},
      {url: 'https://i.ibb.co/ygqHsHV/coffee-milk.jpg', title: 'Coffee with Milk'},
      {url: 'https://i.ibb.co/7XqwsLw/fox.jpg', title: 'Fox'},
      {url: 'https://i.ibb.co/L1m1NxP/girl.jpg', title: 'Mountain Girl'},
      {url: 'https://i.ibb.co/wc9rSgw/desserts.jpg', title: 'Desserts Table'},
      {url: 'https://i.picsum.photos/id/1009/5000/7502.jpg?hmac=Uj6crVILzsKbyZreBjHuMiaq_-n30qoHjqP0i7r30r8', title: 'Surfer'},
      {url: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk', title: 'On a Lac'},
      {url: 'https://i.ibb.co/wdrdpKC/kitten.jpg', title: 'Kitten'},
      {url: 'https://i.ibb.co/dBCHzXQ/paris.jpg', title: 'Paris Eiffel'},
      {url: 'https://i.ibb.co/JKB0KPk/pizza.jpg', title: 'Pizza Time'},
      {url: 'https://i.ibb.co/VYYPZGk/salmon.jpg', title: 'Salmon '},
    ];
    this.startFrom = 2;

  }
  handleExit(ev){
    console.log(`&&& ev: ${JSON.stringify(ev)}`);
    const keys = Object.keys(ev);
    if(keys.includes('result') &&ev.result) {
      if(keys.includes('imageIndex')) {
        console.log(`last image index: ${ev.imageIndex}`);
      }
    }
    if(keys.includes('message')) {
      console.log(`returned message: ${ev.message}`);
    }
    this.location.back();
  }

}
