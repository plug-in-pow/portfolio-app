import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('activeInactive', [
      state('active', style({
        color: 'white',
        borderBottom: '2px solid #80ff44'
      })),
      state('inactive', style({
        color: 'white',
      })),
      transition('active => inactive', [
        animate('400ms ease')
      ]),
      transition('inactive => active', [
        animate('400ms ease')
      ])
    ])
  ]
})
export class AppComponent {
  navbarData: any[] = [
    { "name": "Home", "status": "active" },
    { "name": "About Me", "status": "inactive" },
    { "name": "Projects", "status": "inactive" },
  ];

  navbarItemClick(event: Event) : void {
    let clickedItem: string = (event.target as HTMLInputElement).innerHTML;
    this.navbarData.forEach(obj => {
      if(obj.name === clickedItem.trim()) {
        obj.status = "active";
      }else{
        obj.status = "inactive";
      }
    });

  }
}
