import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:"Neat Tree",
      imageUrl:"assets/tree.jpeg",
      username:"@Nature",
      content:"I saw this nice tree today"
    },
    
    {
      title:"Snowy Mountain",
      imageUrl:"assets/mountain.jpeg",
      username:"MountainLover",
      content:"Here is a picture of a beautiful mountain"
    },
    
    {
      title:"Mountain Biking",
      imageUrl:"assets/biking.jpeg",
      username:"biker122",
      content:"I did some bikins today"
    }
    
  ];
}
