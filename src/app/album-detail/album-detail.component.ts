import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { Review } from '../review.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit {
  albumId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  reviews: Review[] = [
    new Review("Loved this Pink Floyd album", 5, "A very good Pink Floyd album", 1, 1),
    new Review("Funhouse is great", 5, "A very good Funhouse album", 2, 2),
    new Review("Funhouse is really great", 5, "A so-so Funhouse album", 2, 3),
  ];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }

  showReviews() {
    this.revealReviews = true;
  }

  hideReviews() {
    this.revealReviews = false;
  }

  // hideDetails() {
  //   this.detailedReview = null;
  // }

  showReviewDetails(clickedReview) {
    if(this.detailedReview === null) {
      this.detailedReview = clickedReview;
    } else {
      this.detailedReview = null;
    }
  }

  revealReviews = null;
  detailedReview: Review = null;

}
