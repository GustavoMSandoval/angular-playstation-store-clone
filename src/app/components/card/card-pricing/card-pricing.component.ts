import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TransformadorPipe } from "../../../transformador.pipe";

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, TransformadorPipe],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss'
})
export class CardPricingComponent {
  
  @Input()
  gameType:string = '';
  @Input()
  gamePrice:string = '';
}
