import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Product } from '../../domain/product';
import { ClubMember } from '../../domain/clubMember';
import { Consumption } from '../../domain/consumption';
import { ConsumptionService } from '../../services/consumption.service';
import { PhotoCaptureComponent } from '../photo-capture/photo-capture.component';

@Component( {
    selector: 'app-order-stepper',
    templateUrl: './order-stepper.component.html',
    styleUrls: ['./order-stepper.component.css']
} )
export class OrderStepperComponent implements OnInit {

    isLinear = false;
    formGroup: FormGroup;

    selectedFinalProduct: Product;
    selectedFinalClubMember: ClubMember;
    relatedPhoto64BaseEncoded: string;
    @ViewChild( PhotoCaptureComponent )
    private photoCaptureComponent: PhotoCaptureComponent;

    constructor( private _formBuilder: FormBuilder,
        private messageService: MessageService,
        private consumptionService: ConsumptionService ) { }

    ngOnInit() {
        this.formGroup = this._formBuilder.group( {
            firstCtrl: ['', Validators.required]
        } );
    }

    onClubMemberSelection( clubMember: ClubMember ) {
        this.selectedFinalClubMember = clubMember;
        this.photoCaptureComponent.capturePhoto();
    }

    onProductSelection( product: Product ) {
        this.selectedFinalProduct = product;
    }

    onPhotoCapture( photo64BaseEncoded: string ) {
        this.relatedPhoto64BaseEncoded = photo64BaseEncoded;
    }

    onFinish(): void {
        this.messageService.add( 'Click Finish' );
        var newConsumption: Consumption = new Consumption( null, null, null, null, null );
        newConsumption.product = this.selectedFinalProduct;
        newConsumption.clubMember = this.selectedFinalClubMember;
        newConsumption.photoBase64Encoded = this.relatedPhoto64BaseEncoded;
        this.consumptionService.addConsumption( newConsumption ).subscribe( consumption => this.messageService.add( 'Consumption Added' ) );
    }
}
