import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.model';
import { GifServiceService } from 'src/app/services/gif-service.service';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {

  objeto: Gif = new Gif;

  constructor(private gifServ: GifServiceService) { }

  ngOnInit(): void {
    this.gifServ.getGifByTag()
  }

}
