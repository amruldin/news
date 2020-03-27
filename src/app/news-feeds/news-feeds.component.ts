import { Component, OnInit } from '@angular/core';
import {HttpNewsService} from '../http-news.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})


export class NewsFeedsComponent implements OnInit {
  news:Object;
  totalResult: any;

  


  constructor(private _http:HttpNewsService) { }

  ngOnInit() {

    

    this._http.getAllHeadlines().subscribe(data=>{
      this.news = data['articles'];
      this.totalResult = data['totalResults'];



    })

  }

}
