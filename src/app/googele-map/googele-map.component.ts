import { Component } from '@angular/core';
import {MapMarker,GoogleMap,} from '@angular/google-maps'
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-googele-map',
  templateUrl: './googele-map.component.html',
  styleUrl: './googele-map.component.css',
  standalone:true,
  imports:[MapMarker,GoogleMap,ReactiveFormsModule,CommonModule]
})
export class GoogeleMapComponent {

  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.MarkerOptions =
    {
      draggable: false,
      icon:'https://img.icons8.com/?size=60&id=RMrg_2WKR3ZK&format=png'
    }
  advancedmarker:google.maps.marker.AdvancedMarkerElement

  addMarker(e: google.maps.MapMouseEvent|google.maps.IconMouseEvent) {
    if(e.latLng!==null)
    this.markerPositions.push(e.latLng.toJSON());
  }

  form:FormGroup = this.fb.group({
        coords: this.fb.array([])
    });
  center: any= {lat:19,lng:78};
  zoom: number = 18;

  async initMap() {



  }
  constructor(private fb:FormBuilder) {}

  get coords() {
    return this.form.controls["coords"] as FormArray;
  }
  addCoords() {
    const coordForm:FormGroup = this.fb.group({
        lat: [null, Validators.required],
        lng: [null, Validators.required]
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
  position: { lat: 14.535455012359806, lng: 120.98195420962453 },
});
    this.coords.push(coordForm)
    console.log("curent coords = ",this.form.controls['coords'].value)
  }
  deleteCoords(index: number) {
    this.coords.removeAt(index);
  }
}
