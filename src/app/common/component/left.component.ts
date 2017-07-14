import {Component} from '@angular/core';
import { Routes}  from '@angular/router';
import { } from '../../pages/the-rolling-stones/the-rolling-stones';



import { enableProdMode }  from '@angular/core';


enableProdMode();



@Component ({
  selector: 'app-left-navigation',
  templateUrl: './left.component.html',
  styleUrls: [
    './left.component.scss'
  ]

})

export class LeftComponent {

}

@Routes([{
  selector: 'page-navigation',
  path: '../../pages/the-rolling-stones/the-rolling-stones',
  component: TheRollingStonesPage}
  ])

export class TheRollingStonesPage {

    constructor(private router:Routes) { }

  title = 'my-app works!';
  }
