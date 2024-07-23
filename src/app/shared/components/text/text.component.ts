import {Component, Input} from '@angular/core';

@Component({
  selector: 'sf-text',
  templateUrl: './text.component.html',
  styles: '*{margin: 0; box-sizing:border-box;}'
})
export class TextComponent {
  @Input() icon!: string;
  @Input() iconSize: number = 16;
  @Input() fontSize: number = 16;
  @Input() weight: 'bold' | 'bolder' | number = 400;
  @Input() maxWidth: number = 65;
  @Input() color: string = 'brand-800';
  @Input() textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' = 'left';
}
