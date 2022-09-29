import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.model';
import { GifServiceService } from 'src/app/services/gif-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {

  objeto: Gif = new Gif;

  id = 0;
  gifTag = '';
  gifRoute = '';
  constructor(private gifServ: GifServiceService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getId(params['Id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getId(id: any) {
    this.gifServ.getGifById(id).subscribe(data => {
      this.id = data.id;
      this.gifTag = data.gifTag;
      this.gifRoute = data.gifRoute;
    });
  }
}
