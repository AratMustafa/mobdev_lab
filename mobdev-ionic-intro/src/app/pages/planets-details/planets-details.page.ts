import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.page.html',
  styleUrls: ['./planets-details.page.scss'],
})
export class PlanetsDetailsPage implements OnInit {

  planet: any;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(id).subscribe(res => {
    this.planet = res;

  });
  }

}
