import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Product } from '../../domain/product';
import { ClubMember } from '../../domain/clubmember';

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
  private messageService: MessageService) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  onClubMemberSelection(clubMember: ClubMember) {
      this.selectedFinalClubMember = clubMember;
    }

  onSelect(): void {
    this.messageService.add('CLick Ok');
  }


}
