import { Pipe, PipeTransform } from '@angular/core';
import { Review } from './review.model';

@Pipe({
  name: "albumFilter",
  pure: false
})

export class AlbumFilterPipe implements PipeTransform {
  transform(input: Review[], albumId) {
    let output: Review[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].album_id === albumId) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
