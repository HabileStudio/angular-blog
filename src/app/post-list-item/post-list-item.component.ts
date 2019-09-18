import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string
  @Input() content: string
  @Input() loveIts: number
  @Input() createdAt: Date

  constructor() { }

  upVote(){
    this.loveIts++
  }

  downVote(){
    this.loveIts--
  }

  ngOnInit() {
  }

}
