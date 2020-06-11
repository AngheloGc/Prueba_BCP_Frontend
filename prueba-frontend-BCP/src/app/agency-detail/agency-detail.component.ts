import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bcp-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.css']
})
export class AgencyDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      console.log(id);
    })
  }

  updateAgency(agencia,distrito,provincia,departamento,direccion,latitud,longitud) {
    console.log("Actualizando",agencia,distrito,provincia,departamento,direccion,latitud,longitud)
    return false;
  }

}
