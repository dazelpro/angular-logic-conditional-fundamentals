import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    show = false;
    textButton = "Tampilkan";

    constructor() { }

    ngOnInit(): void {
    }

    klikTombol() {
        if (this.show === false) {
            this.textButton = "Sembunyikan";
            this.show = true;
        }else{
            this.textButton = "Tampilkan";
            this.show = false;
        }
    }
}
