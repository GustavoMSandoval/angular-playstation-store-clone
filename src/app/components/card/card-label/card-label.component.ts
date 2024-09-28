import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.scss'
})
export class CardLabelComponent implements OnInit {
  
  @Input()
  gameLabel:string = ''

  constructor() {}

  hideEmptyLabel(labelText: string):boolean{
    return labelText !== '';
  }

  ngOnInit(): void {
      
  }
  
}
