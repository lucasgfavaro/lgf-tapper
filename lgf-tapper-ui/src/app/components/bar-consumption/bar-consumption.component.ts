import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Product } from '../../domain/product';
import { ClubMember } from '../../domain/clubMember';
import { Consumption } from '../../domain/consumption';
import { ConsumptionService } from '../../services/consumption.service';
import { RecognitionService } from '../../services/recognition.service';
import { PhotoCaptureComponent } from '../photo-capture/photo-capture.component';
import { ClubMemberSelectorComponent } from "../selectors/club-member-selector/club-member-selector.component";
import { RecognFace } from "../../domain/recognFace";

@Component( {
    selector: 'bar-consumption',
    templateUrl: './bar-consumption.component.html',
    styleUrls: ['./bar-consumption.component.css']
} )
export class BarConsumptionComponent implements OnInit {

    selectedFinalProduct: Product;
    selectedFinalClubMember: ClubMember;
    relatedPhoto64BaseEncoded: string;
    @ViewChild( PhotoCaptureComponent )
    private photoCaptureComponent: PhotoCaptureComponent;
    @ViewChild( ClubMemberSelectorComponent )
    private clubMemberSelectorComponent: ClubMemberSelectorComponent;

    constructor( 
        private messageService: MessageService,
        private consumptionService: ConsumptionService,
        private recognitionService: RecognitionService ) { }

    ngOnInit() {
    }

    onClubMemberSelection( clubMember: ClubMember ) {
        this.selectedFinalClubMember = clubMember;
    }

    onProductSelection( product: Product ) {
        this.selectedFinalProduct = product;
        this.photoCaptureComponent.capturePhoto();
        this.recognitionService.recognFace( new RecognFace( this.relatedPhoto64BaseEncoded ) ).subscribe
            ( recognFaceResults => {
                if (recognFaceResults.clubMember){
                this.messageService.add( recognFaceResults.clubMember.id.toString() );
                this.clubMemberSelectorComponent.selectedClubMember = recognFaceResults.clubMember;
                }
                this.messageService.add( "No face recognized" );
            });
    }

    onPhotoCapture( photo64BaseEncoded: string ) {
        this.relatedPhoto64BaseEncoded = photo64BaseEncoded;
    }

    onSubmit(): void {
        this.messageService.add( 'Click Finish' );
         var newConsumption: Consumption = new Consumption( null, null, null, null, null );
         newConsumption.product = this.selectedFinalProduct;
         newConsumption.clubMember = this.clubMemberSelectorComponent.getSelectedClubMember();
         newConsumption.photoBase64Encoded = this.relatedPhoto64BaseEncoded;
         this.consumptionService.addConsumption( newConsumption ).subscribe( consumption => this.messageService.add( 'Consumption Added' ) );
    }

    onCancel(): void {
        
    }
}
