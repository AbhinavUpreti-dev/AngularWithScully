import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy{

  constructor(private scullyService:ScullyRoutesService) { }
  private routeSub : Subscription | undefined;
  posts:ScullyRoute[] =[];
  ngOnInit(): void {
    debugger;
    this.routeSub = this.scullyService.available$.subscribe(posts=>{
     
      this.posts= posts.filter(post=>post.title);
    })
  }
  ngOnDestroy() : void{
    this.routeSub?.unsubscribe();
  }

}
