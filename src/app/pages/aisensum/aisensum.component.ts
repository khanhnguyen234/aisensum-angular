import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aisensum',
  templateUrl: './aisensum.component.html',
  styleUrls: ['./aisensum.component.scss'],
})
export class AisensumComponent implements OnInit {
  imageUrl: any;

  constructor() {
    this.imageUrl = 'https://image.flaticon.com/icons/png/128/3813/3813842.png';
  }

  ngOnInit(): void {}
}
