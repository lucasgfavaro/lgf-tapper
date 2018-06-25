import { Component, OnInit, HostBinding } from '@angular/core';
import { Consumption } from '../../domain/consumption';
import { ConsumptionService } from '../../services/consumption.service';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-consumptions-list',
  templateUrl: './consumptions-list.component.html',
  styleUrls: ['./consumptions-list.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ConsumptionsListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  consumptions: Consumption[];

  constructor(private consumptionService: ConsumptionService ) { }

  ngOnInit() {
    this.getConsumptions();
  }

  getConsumptions(): void {
    this.consumptionService.getConsumptions()
        .subscribe(consumptions => this.consumptions = consumptions);
  }

}
