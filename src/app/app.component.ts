import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('activeInactive', [
      state('active', style({
        color: '#6E07F3',
      })),
      state('inactive', style({
        color: 'black',
      })),
      transition('active => inactive', [
        animate('600ms ease')
      ]),
      transition('inactive => active', [
        animate('600ms ease')
      ])
    ])
  ]
})
export class AppComponent {
  navbarData: any[] = [
    { "name": "Home", "status": "active" },
    { "name": "About", "status": "inactive" },
    { "name": "Skills", "status": "inactive" },
    { "name": "Projects", "status": "inactive" },
  ];

  navbarItemClick(event: Event) : void {
    let clickedItem: string = (event.target as HTMLInputElement).innerHTML;
    this.navbarData.forEach(obj => {
      if(obj.name === clickedItem) {
        obj.status = "active";
      }else{
        obj.status = "inactive";
      }
    })
  }
}
