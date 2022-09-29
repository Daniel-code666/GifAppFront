import { Component, OnInit } from '@angular/core';
import { GifServiceService } from 'src/app/services/gif-service.service';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {

  constructor(private gifServ: GifServiceService) { }

  ngOnInit(): void {
  }

}
