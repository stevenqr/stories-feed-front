import { Component, OnInit } from '@angular/core';
import { Story } from '../../interfaces/story';
import { StoriesFeedService } from '../../services/stories-feed.service';

@Component({
  selector: 'app-stories-feed-list',
  templateUrl: './stories-feed-list.component.html',
  styleUrls: ['./stories-feed-list.component.css']
})
export class StoriesFeedListComponent implements OnInit {

  stories: Story[] = [];

  constructor(private storiesFeedService: StoriesFeedService) { }

  ngOnInit() {
    this.getStoriesFeed();
  }

  openStory(storyUrl: string): void{
    window.open(storyUrl, "_blank");
  }

  getStoriesFeed(): void {
    this.storiesFeedService.getStoriesFeed().subscribe( response =>{
      this.stories = response;
    });
  }
}
