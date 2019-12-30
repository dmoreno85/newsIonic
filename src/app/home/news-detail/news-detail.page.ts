import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service'
import { ActivatedRoute } from "@angular/router";
import { HomeInt } from "../../interface/home.interface";
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  newsValue: HomeInt;
  constructor(private newService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newService.getNewId(params.id).subscribe(value => {
        this.newsValue = value;
        // console.log(this.newsValue)
      })
    })

  }

}
