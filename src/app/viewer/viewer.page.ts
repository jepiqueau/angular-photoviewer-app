import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { base64Images } from '../utils/base64Image';

@Component({
  selector: 'app-viewer',
  templateUrl: 'viewer.page.html',
  styleUrls: ['viewer.page.scss'],
})
export class ViewerPage  implements OnInit{
  imageList: any[] = [];
  mode: string;
  startFrom: number;
  platform: string;

  constructor(private router: Router,
              private actRoute: ActivatedRoute) {
    this.mode = this.actRoute.snapshot.params.mode;
    this.platform = Capacitor.getPlatform();
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
      {url: 'https://i.ibb.co/VYYPZGk/salmon.jpg', title: 'Salmon '}
    ];
    this.imageList.push(base64Images[0]);
    this.imageList.push(base64Images[1]);
    if (this.platform === 'ios') {
      this.imageList.push({url: 'file:///var/mobile/Media/DCIM/100APPLE/IMG_0001.JPG', title: 'Image1'});
      this.imageList.push({url: 'file:///var/mobile/Media/DCIM/100APPLE/IMG_0002.JPG', title: 'Image2'});
      this.imageList.push({url: 'capacitor://localhost/_capacitor_file_/var/mobile/Containers/Data/Application/0C6DDAA3-1486-43E1-A7A8-2E9B39107F32/Documents/photo1.jpg', title: 'ImageFromDocument'});
    }
    if (this.platform === 'android') {
      this.imageList.push({url: 'file:///sdcard/DCIM/IMG_0001.JPG', title: 'Image1'});
      this.imageList.push({url: 'file:///sdcard/DCIM/IMG_0002.JPG', title: 'Image2'});
      this.imageList.push({url: 'file:///sdcard/Pictures/IMG_0003.JPG', title: 'Image3'});
      this.imageList.push({url: 'http://localhost/_capacitor_file_/storage/emulated/0/Pictures/JPEG_20221001_113835_7582877022250987909.jpg', title: 'Imagelocalhost'});
      this.imageList.push({url: 'capacitor://localhost/_capacitor_file_/storage/emulated/0/Pictures/JPEG_20221001_102529_2463134056977343449.jpg', title: 'Imagelocalhost'});
    }
    this.startFrom = 2;
    const pathIOS = Capacitor.convertFileSrc('file:///var/mobile/Media/DCIM/100APPLE/IMG_0001.JPG');
    const pathAndroid = Capacitor.convertFileSrc('file:///sdcard/DCIM/IMG_0001.JPG');
    console.log(`pathIOS: ${pathIOS}`);
    console.log(`pathAndroid: ${pathAndroid}`);
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
    this.router.navigateByUrl('/home');
  }

}
