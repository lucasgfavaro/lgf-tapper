import { Component, OnInit, HostBinding } from '@angular/core';
import { Consumption } from '../../domain/consumption';
import { ClubMember } from '../../domain/clubMember';
import { IndexFace } from '../../domain/indexFace';
import { RecognitionService } from '../../services/recognition.service';
import { ConsumptionService } from '../../services/consumption.service';
import { MessageService } from '../../services/message.service';
import { slideInDownAnimation } from '../../animations';
import { Observable } from "rxjs";

@Component( {
    selector: 'app-consumptions-list',
    templateUrl: './consumptions-list.component.html',
    styleUrls: ['./consumptions-list.component.css'],
    animations: [slideInDownAnimation]
} )
export class ConsumptionsListComponent implements OnInit {

    @HostBinding( '@routeAnimation' ) routeAnimation = true;
    @HostBinding( 'style.display' ) display = 'block';
    @HostBinding( 'style.position' ) position = 'absolute';

    consumptions: Consumption[];

    constructor( private messageService: MessageService, private consumptionService: ConsumptionService
        , private recognitionService: RecognitionService ) { }

    ngOnInit() {
        this.getConsumptions();
    }

    getConsumptions(): void {
        this.consumptionService.getConsumptions()
            .subscribe( consumptions => this.consumptions = consumptions );
    } 

    indexFace( consumption: Consumption ) {
        var indexFace = new IndexFace( consumption.clubMember, consumption.photoBase64Encoded );
        this.recognitionService.indexFace( indexFace ).subscribe(
                ( faceId: Map<String, string> ) =>
                this.messageService.add(  faceId.faceId ) );
    }

}
