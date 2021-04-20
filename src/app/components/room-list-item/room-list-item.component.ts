import {Component, Input, OnInit} from '@angular/core';
import {RatingEvaluation} from '../../models/rating-evaluation.model';
import {Room} from '../../models/room.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.css'],
})
export class RoomListItemComponent implements OnInit {
  @Input() room: Room;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  moveToDetails(id) {
    this.router.navigate(['./detalhes', id]);
  }
}
