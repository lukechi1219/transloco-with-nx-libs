import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'transloco-with-libs-ui',
  template: `
    <ng-container *transloco="let t">
      <p>{{ t('compUi.gpsui') }} in location-ui.component.ts</p>
      <h1 style="color: blue;">{{ t('by.project.text') }}</h1>
    </ng-container>
  `,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'compUi'
    }
  ]
})
export class LocationUIComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
