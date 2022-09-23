import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraSource, CameraResultType} from '@capacitor/camera';

@Component({
  selector: 'app-reservieren',
  templateUrl: './reservieren.page.html',
  styleUrls: ['./reservieren.page.scss'],
})
export class ReservierenPage implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string;

  constructor() { }

  ngOnInit() {
  }
  onImagePicked(imageData: string){}


}
