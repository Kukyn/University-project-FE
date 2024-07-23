import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnInit{
  @Input() icon!: string;
  @Input() size!: number;
  @Input() color: string = "brand-800";
  protected svgWidth!:string;
  protected svgColor!:string;

  ngOnInit() {
    this.svgWidth = `${this.size}px`
    this.svgColor = `var(--${this.color})`
  }
}
