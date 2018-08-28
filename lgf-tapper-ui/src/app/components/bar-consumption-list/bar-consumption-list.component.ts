import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Consumption } from '../../domain/consumption';
import { IndexFace } from '../../domain/indexFace';
import { RecognFace } from '../../domain/recognFace';
import { RecognitionService } from '../../services/recognition.service';
import { ConsumptionService } from '../../services/consumption.service';
import { MessageService } from '../../services/message.service';
import { slideInDownAnimation } from '../../animations';
import { MatPaginator, MatSort} from '@angular/material';
import { startWith, switchMap, map, catchError, mapTo, delay} from '../../../../node_modules/rxjs/operators';
import { merge, of } from '../../../../node_modules/rxjs';

export interface ConsumptionPage {
    items: Consumption[];
    totalCount: number;
}

@Component({
    selector: 'bar-consumption-list',
    templateUrl: './bar-consumption-list.component.html',
    styleUrls: ['./bar-consumption-list.component.css'],
    animations: [slideInDownAnimation]
})
export class BarConsumptionListComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;

    displayedColumns: string[] = ['createdOn', 'product', 'clubMember', 'image', 'actions'];
    data: Consumption[] = [];
    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private messageService: MessageService, private consumptionService: ConsumptionService,  private recognitionService: RecognitionService) { }

    ngOnInit() {

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;

console.log(this.sort.active +" " + this.sort.direction);

                    return this.consumptionService!.getConsumptions(
                        this.sort.active, this.sort.direction, this.paginator.pageIndex, 10);
                }),
                map(page => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = page.totalElements;

                    return page.content;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    // Catch if the GitHub API has reached its rate limit. Return empty data.
                    this.isRateLimitReached = true;
                    return of([]);
                })
            ).subscribe(data => this.data = data);
    }

    indexFace(consumption: Consumption) {
        var indexFace = new IndexFace(consumption.clubMember, consumption.photoBase64Encoded);
        this.recognitionService.indexFace(indexFace).subscribe
            (indexFaceResults => this.messageService.add(indexFaceResults.faceId.toString()));

    }

    recognFace(consumption: Consumption) {
        

        var recognFace = new RecognFace(consumption.photoBase64Encoded);
        this.recognitionService.recognFace(recognFace).subscribe
            (recognFaceResults => this.messageService.add(recognFaceResults.clubMember.id.toString() + " "
                + recognFaceResults.clubMember.firstName + " " + recognFaceResults.clubMember.lastName));
    }

}
