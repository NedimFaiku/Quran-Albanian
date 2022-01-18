import { Component, OnInit } from '@angular/core';
import {SuretService} from '../Serviset/suret.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suret: any;
  surjaArabisht: any;
  suretFjaletCopy = {};
  suretFjalet =  [];
  mbyll: any;
  obj: any;
  stringu: any;
  length: any;
  constructor(private sureService: SuretService) { }

  ngOnInit(): void {
    this.merriSuret();
  }
  merriSuret(){
    this.suret = this.sureService.merriSuret().subscribe( res => {
      this.suret = res;
    });
  }
  suretArabisht(id: number) {
    this.suretFjalet = [];
    // @ts-ignore
    document.getElementById('loaderi1').classList.add('loader');
    this.surjaArabisht = this.sureService.suretArabisht(id).subscribe(res => {
        this.surjaArabisht = res;
        // @ts-ignore
        document.getElementById('loaderi1').classList.remove('loader');
        }
    );
    console.log(typeof this.surjaArabisht);

    setTimeout(() => {
      this.stringu = JSON.stringify(this.surjaArabisht);
    this.obj = JSON.parse(this.stringu);
    this.length = Object.keys(this.obj.verses).length;
    for (let i = 0; i < this.length; i++){


      // @ts-ignore
      this.suretFjalet.push(this.surjaArabisht.verses[i].text.split(' '));
    }
    this.suretFjaletCopy = this.suretFjalet;
    console.log(JSON.stringify(this.suretFjaletCopy));
    }, 100);
    
  }
  ndajFjalet(){
    this.stringu = JSON.stringify(this.surjaArabisht);
    this.obj = JSON.parse(this.stringu);
    this.length = Object.keys(this.obj.verses).length;
    for (let i = 0; i < this.length; i++){


      // @ts-ignore
      this.suretFjalet.push(this.surjaArabisht.verses[i].text.split(' '));
    }
    this.suretFjaletCopy = this.suretFjalet;
    console.log(JSON.stringify(this.suretFjaletCopy));
  }
  mbylle(){
    this.mbyll = document.getElementById('arabisht');
    this.mbyll.style.display = 'none';
    setTimeout(() => {
      this.mbyll.style.display = 'block';
      this.surjaArabisht = null;
      this.suretFjalet = [];
    }, 10);
  }
}
