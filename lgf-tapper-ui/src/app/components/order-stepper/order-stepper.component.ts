import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Product } from '../../domain/product';
import { ClubMember } from '../../domain/clubMember';
import { Consumption } from '../../domain/consumption';
import { ConsumptionService } from '../../services/consumption.service';

@Component({
  selector: 'app-order-stepper',
  templateUrl: './order-stepper.component.html',
  styleUrls: ['./order-stepper.component.css']
})
export class OrderStepperComponent implements OnInit {

  isLinear = false;
  formGroup: FormGroup;

  selectedFinalProduct: Product;
  selectedFinalClubMember: ClubMember;

  constructor(private _formBuilder: FormBuilder,
  private messageService: MessageService,
  private consumptionService: ConsumptionService) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  onClubMemberSelection(clubMember: ClubMember) {
      this.selectedFinalClubMember = clubMember;
    }

  onProductSelection(product: Product) {
      this.selectedFinalProduct = product;
    }

  onFinish(): void {
    this.messageService.add('Click Finish');
    var newConsumption : Consumption = new Consumption();
    newConsumption.product = this.selectedFinalProduct;
    newConsumption.clubMember = this.selectedFinalClubMember;

    this.consumptionService.addConsumption(newConsumption);
  }
}
