import { Component, OnInit } from '@angular/core';
import { Agency } from '../agencies/agency';
import { AGENCIES } from '../DataAgencies/data-agencias';

@Component({
  selector: 'bcp-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agencies = AGENCIES;
  selectedAgency: Agency;

  constructor() {}

  ngOnInit(): void {
  }

  onSelect(agency: Agency): void{
    this.selectedAgency = agency;
  }

  

}
