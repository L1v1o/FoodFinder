import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Capacitor} from '@capacitor/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string;
  constructor() { }

  ngOnInit() {}

  onPickImage(){
    if(!Capacitor.isPluginAvailable('Camera')){
      return;
    }
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.DataUrl,
    })
    .then((image)=>{
      this.selectedImage = image.dataUrl;
      this.imagePick.emit(image.dataUrl);
    })
    .catch((error) =>{
      console.log(error);
      return false;
    });
  }
}
