import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop-paises',
  templateUrl: './dragdrop-paises.component.html',
  styleUrls: ['./dragdrop-paises.component.scss']
})
export class DragdropPaisesComponent implements OnInit {

  paises:any = []
  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( resp => this.paises = resp )
  }

  drop( event:CdkDragDrop<any> ){
    console.log({event});
    
    moveItemInArray( this.paises, event.previousIndex, event.currentIndex);
    // luego deberia ir guardado a una base de datos, localstorage, etc...
  }
}
