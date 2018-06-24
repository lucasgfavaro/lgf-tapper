import { Component, OnInit } from '@angular/core';
import { Consumption } from '../../domain/consumption';
import { ConsumptionService } from '../../services/consumption.service';

@Component({
  selector: 'app-consumptions-list',
  templateUrl: './consumptions-list.component.html',
  styleUrls: ['./consumptions-list.component.css']
})
export class ConsumptionsListComponent implements OnInit {

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
