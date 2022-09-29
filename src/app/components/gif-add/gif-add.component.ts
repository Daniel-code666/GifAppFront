import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GifServiceService } from 'src/app/services/gif-service.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Gif } from 'src/app/models/gif.model';

@Component({
  selector: 'app-gif-add',
  templateUrl: './gif-add.component.html',
  styleUrls: ['./gif-add.component.css']
})
export class GifAddComponent implements OnInit {

  form!: FormGroup;
  selectedFile = null;

  constructor(private gifServ: GifServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  elemento = new FormGroup({
    gifTag: new FormControl(),
    gifRoute: new FormControl(),
  });

  onSubmit() {
    const gif = new Gif()

    gif.gifTag = this.elemento.value.gifTag
    gif.gifRoute = this.elemento.value.gifRoute

    console.log(gif)

    this.gifServ.postGif(gif).subscribe(success => {
      console.log(success)
      this.elemento.value.gifTag = ''
      this.elemento.value.gifRoute = ''
      this.router.navigate(['home'])
    })
  }
}
