import { Component, OnInit } from '@angular/core';
import { MapsService } from './apps/maps/maps.service';

@Component({
  selector: 'app',
  template: `
            <weather></weather>
            <time></time>
            <dashboard></dashboard>
            <pushbullet></pushbullet>
            <todoist></todoist>
            <asr2></asr2>
            `
})
export class AppComponent implements OnInit {
  constructor(private maps: MapsService) { }

  ngOnInit() {
    this.maps.geolocation();
  }
}