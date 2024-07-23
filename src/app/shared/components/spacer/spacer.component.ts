import {Component, Input} from '@angular/core';

@Component({
  selector: 'sf-spacer',
  templateUrl: './spacer.component.html',
  styleUrl: './spacer.component.scss'
})
export class SpacerComponent {
  @Input() gapSize: number = 8;
  @Input() align: 'start' | 'end' | 'center' | 'baseline' = "center";
  @Input() direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = "row";

}
