import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agency } from '../agencies/agency';
import { AgencyService } from '../services/agency.service'

@Component({
  selector: 'bcp-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.css']
})
export class AgencyDetailComponent implements OnInit {

  agencyDetail: Agency;

  constructor(private activatedRoute: ActivatedRoute, public agencyService: AgencyService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.agencyDetail = this.agencyService.getAgency(id)
    })
  }


  updateAgency(agencia,distrito,provincia,departamento,direccion,latitud,longitud) {
    let agency : Agency = {
      agencia: agencia.value,
      distrito: distrito.value,
      provincia: provincia.value,
      departamento: departamento.value,
      direccion: direccion.value,
      lat: parseInt(latitud.value),
      lon: parseInt(longitud.value)

    }

    this.agencyService.updateAgency(agency);

    return false;
  }

}
