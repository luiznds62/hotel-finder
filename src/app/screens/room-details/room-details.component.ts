import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../models/room.model';
import {DEBOUNCE_ROOM_TIME, roomsList} from '../../utils/RoomsList';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  loading: Boolean = false;
  room: Room = null;
  imageSrc: String = '';
  showModal: Boolean = false;
  map: any;
  zoom = 12;
  center: any = {};
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => this.loadItem(), DEBOUNCE_ROOM_TIME);
    this.loading = false;
  }

  showImageModal(src) {
    this.imageSrc = src;
    this.showModal = true;
  }

  loadItem = () => {
    const paramMap: any = this.route.snapshot.paramMap;

    this.room = roomsList.find((room: Room) => {
      return room.id === parseInt(paramMap.params['id'], null);
    });

    this.center = new google.maps.LatLng(this.room.lat, this.room.lng);
  };

}
