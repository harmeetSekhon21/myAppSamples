import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
  inputs:['artist']
})
export class ArtistDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
