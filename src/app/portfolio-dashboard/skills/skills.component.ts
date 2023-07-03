import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [
    {
      "icon": "fa-brands fa-angular fa-2xl",
      "name": "Angular"
    },
    {
      "icon": "fa-brands fa-node-js fa-2xl",
      "name": "Node js"
    },
    {
      "icon": "fa-brands fa-html5 fa-2xl",
      "name": "HTML5"
    },
    {
      "icon": "fa-brands fa-css3-alt fa-2xl",
      "name": "CSS3"
    },
    {
      "icon": "fa-brands fa-square-js fa-2xl",
      "name": "Javascript"
    },
    {
      "icon": "fa-brands fa-bootstrap fa-2xl",
      "name": "Bootstrap"
    },
    {
      "icon": "fa-brands fa-git-alt fa-2xl",
      "name": "Git"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
