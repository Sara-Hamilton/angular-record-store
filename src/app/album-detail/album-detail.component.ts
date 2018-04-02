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
    new Review("Loved this Pink Floyd album", 5, "A very good album", 1, 1),
    new Review("Funhouse is great", 5, "A very good album", 2, 2),
    new Review("Funhouse is really great", 5, "A very good album", 2, 3),
  ];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }

  // goToReviewsPage(clickedAlbum: Album) {
  //      this.router.navigate(['reviews', clickedAlbum.album_id]);
  //    };

 showReviews(clickedAlbum: Review) {
      this.router.navigate(['reviews', clickedAlbum.album_id]);
    };

}
