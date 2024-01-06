import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  constructor(private _imagesService: ImagesService, private sanitizer: DomSanitizer) { }
  imageData!: SafeUrl;
  images: any[] = [];

  ngOnInit() {
    console.log('ImagesComponent');
    this.getImages();
  }

  getImages(): void {
    this._imagesService.getImages().subscribe(
      (response: any) => {
        this.images = response.images;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  

  dataURItoBlob(dataURI: string) {
    try {
      const byteString = window.atob(dataURI.split(',')[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: 'image/jpeg' });
      return blob;
    } catch (error) {
      console.error('Failed to decode base64 string:', error);
      return null;
    }
  }
}