import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('activeInactive', [
      state('active', style({
        background: 'blueviolet',
        color: 'white',
        boxShadow: 'rgb(223 0 255 / 25%) 0px 8px 24px'
      })),
      state('inactive', style({
        background: 'transparent',
        color: 'black',
        boxShadow: 'none'
      })),
      transition('active => inactive', [
        animate('200ms cubic-bezier(0.61, 1, 0.88, 1)')
      ]),
      transition('inactive => active', [
        animate('200ms cubic-bezier(0.37, 0, 0.63, 1)')
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
