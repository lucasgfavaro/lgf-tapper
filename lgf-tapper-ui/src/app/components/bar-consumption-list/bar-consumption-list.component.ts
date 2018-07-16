import { Component, OnInit, HostBinding } from '@angular/core';
import { Consumption } from '../../domain/consumption';
import { IndexFace } from '../../domain/indexFace';
import { RecognFace } from '../../domain/recognFace';
import { RecognitionService } from '../../services/recognition.service';
import { ConsumptionService } from '../../services/consumption.service';
import { MessageService } from '../../services/message.service';
import { slideInDownAnimation } from '../../animations';
import { Observable } from "rxjs";

@Component( {
    selector: 'bar-consumption-list',
    templateUrl: './bar-consumption-list.component.html',
    styleUrls: ['./bar-consumption-list.component.css'],
    animations: [slideInDownAnimation]
} ) 
export class BarConsumptionListComponent implements OnInit {

    @HostBinding( '@routeAnimation' ) routeAnimation = true;

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
        this.recognitionService.indexFace( indexFace ).subscribe
            ( indexFaceResults => this.messageService.add( indexFaceResults.faceId.toString() ) );
    }

    recognFace( consumption: Consumption ) {
        var recognFace = new RecognFace( consumption.photoBase64Encoded );
        this.recognitionService.recognFace( recognFace ).subscribe
            ( recognFaceResults => this.messageService.add( recognFaceResults.clubMember.id.toString() ) );
    }

}
