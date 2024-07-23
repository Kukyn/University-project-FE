import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import { ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'sf-simple-page',
  template: '',
  styles: ``,
})
export class SimplePageComponent implements OnDestroy, OnInit {
  protected readonly router: Router = inject(Router);
  protected destroyed$: ReplaySubject<void> = new ReplaySubject<void>(1);

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  ngOnInit() {
    this.setupPage();
  }

  setupPage(): void{

  }

  goBack():void{}

}
