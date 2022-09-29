import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GifServiceService } from 'src/app/services/gif-service.service';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gif-add',
  templateUrl: './gif-add.component.html',
  styleUrls: ['./gif-add.component.css']
})
export class GifAddComponent implements OnInit {

  form!: FormGroup;

  constructor(private gifServ: GifServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  elemento = new FormGroup({
    gifTag: new FormControl(),
    gifRoute: new FormControl(),
  });

  onSubmit(){

  }
}
