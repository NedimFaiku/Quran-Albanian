import { Component, OnInit } from '@angular/core';
import {SuretService} from '../Serviset/suret.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  suret: any;
  surjaArabisht: any;
  constructor(private sureService: SuretService) { }
  ngOnInit(): void {
    this.merriSuret();
  }
  merriSuret(){
    this.suret = this.sureService.merriSuret().subscribe( res => {
      this.suret = res;
    });
  }

}
