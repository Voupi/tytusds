import { Component, OnInit } from '@angular/core';
declare var insertarCombinadaa:any;
@Component({
  selector: 'app-construccion-estructuras-compuestas',
  templateUrl: './construccion-estructuras-compuestas.component.html',
  styleUrls: ['./construccion-estructuras-compuestas.component.css']
})
export class ConstruccionEstructurasCompuestasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value(){
  }
  insertarCombinadaa(data:any,data2:any){
    insertarCombinadaa(data,data2);
  }

}
