import { Injectable } from '@angular/core';

import { Agency } from '../agencies/agency';

@Injectable({
    providedIn: 'root'
})

export class AgencyService {

    agencies: Agency[];

    constructor(){
        this.agencies = [
            {
            agencia: "No agency",
            distrito: "n/a",
            provincia: "n/a",
            departamento: "no city",
            direccion: "No direction",
            lat: -73.240647,
            lon: -3.731367
            },

        ]
    }


    getAgencies() {

        if(localStorage.getItem('agencies') === null) {

            return this.agencies;
        
        } else {

            this.agencies = JSON.parse(localStorage.getItem('agencies'));
            return this.agencies;

        }
    }

    updateAgency(agency: Agency) {

        for(let i = 0; i<this.agencies.length; i++) {
            if (agency == this.agencies[i]) {
                console.log("Agencia encontrada!");
            }
        }

    }
}

