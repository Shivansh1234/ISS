import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { } from 'google.maps';
import { Subscription } from 'rxjs';
import { IssModel } from 'src/app/models/iss';
import { IssService } from 'src/app/services/iss.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('map', { static: true }) gmap: ElementRef;
  private subscriptions = new Subscription();

  marker: google.maps.Marker;
  issData: IssModel;
  interval: any;
  map: google.maps.Map;


  constructor(private issService: IssService) { }

  mapInitializer() {
    let coordinates = new google.maps.LatLng(50, 50);
    let mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 2
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  };

  getCoordinates(): any {
    this.deleteMarker();
    this.subscriptions.add(this.issService.getCoordinates().subscribe(data => {
      console.log(data);
      this.addMarker(data, this.map);
    }));
  }

  deleteMarker(): void {
    if (this.marker != undefined) {
      this.marker.setMap(null);
    }
  }

  addMarker(issData: IssModel, map: google.maps.Map): void {
    let latitude = parseFloat(issData.iss_position.latitude);
    let longitude = parseFloat(issData.iss_position.longitude);
    let cord = new google.maps.LatLng(latitude, longitude);
    this.marker = new google.maps.Marker({
      position: cord,
      map: map
    });
  }

  ngOnInit(): void {
    this.mapInitializer();
    this.getCoordinates();
    this.interval = setInterval(() => {
      this.getCoordinates();
    }, 10000);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit() {
  }

}
