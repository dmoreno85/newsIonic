import { Component, OnInit } from '@angular/core';
import { NewsService } from "../service/news.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  news: object[];
  constructor(public newService: NewsService) { }

  ngOnInit() {
    this.newService.getNews().subscribe(value => {
      this.news = value;
      console.log(this.news)
    })
  };


}
