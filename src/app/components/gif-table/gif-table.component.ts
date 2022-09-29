import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GifServiceService } from 'src/app/services/gif-service.service';

export interface Gif {
  id: number;
  gifRoute: string;
  gifTag: string;
}

@Component({
  selector: 'app-gif-table',
  templateUrl: './gif-table.component.html',
  styleUrls: ['./gif-table.component.css']
})
export class GifTableComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Imagen', 'Etiqueta'];
  dataSource = new MatTableDataSource<Gif>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private gifServ: GifServiceService) { }

  ngOnInit(): void {
    this.getGifs()
  }

  getGifs(){
    this.gifServ.getGif().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data)
      console.log(this.dataSource)
    })
  }

}
