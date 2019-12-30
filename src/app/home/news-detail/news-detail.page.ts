import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
newsValue:object[];
content : object;
  constructor(private newService : NewsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.newService.getNewId(params.id).subscribe(value=>{
        this.newsValue = value;
        this.content = value.content.rendered;
        console.log(this.newsValue)
      })
    })
    // this.route.paramMap.subscribe(paramMap => {
    //   const recipeId = paramMap.get('id')
    //   // console.log(recipeId)
    //   this.newsValue = this.newService.getNewId(recipeId)
    //   console.log('hey'+ this.newsValue)
    // })
  }

}
