import { Pipe, PipeTransform } from '@angular/core';
import { Review } from './review.model';

@Pipe({
  name: "albumFilter",
  pure: false
})

export class AlbumFilterPipe implements PipeTransform {
  transform(input: Review[], albumId) {
    console.log("hello");
    console.log("albumId",albumId);
    let output: Review[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].album_id === albumId) {
        console.log("hello2");
        output.push(input[i]);
      }
    }
    return output;
  }
}
