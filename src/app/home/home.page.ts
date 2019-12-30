import { Component, OnInit } from '@angular/core';
import { NewsService } from "../service/news.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
news : object[];
newIMG :any;
file : any;
  constructor(public newService : NewsService,private router : Router ){ }

ngOnInit(){
  this.newService.getNews().subscribe(value=>{
    this.news = value;
    this.newIMG = this.news[0]['_embedded']['wp:featuredmedia'][0]['media_details']['file'];
    console.log(this.news)

  })
}
}
