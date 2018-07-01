import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-photo-capture',
    templateUrl: './photo-capture.component.html',
    styleUrls: ['./photo-capture.component.css']
})
export class PhotoCaptureComponent implements OnInit {

    @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    @Output() photo64BaseEncoded  = new EventEmitter<String>();

    public constructor() {
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.src = window.URL.createObjectURL(stream);
                this.video.nativeElement.play();
            });
        }
    }

    public capturePhoto() {
        this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 320, 240);
        this.photo64BaseEncoded.emit(this.canvas.nativeElement.toDataURL("image/png"));
    }

}
