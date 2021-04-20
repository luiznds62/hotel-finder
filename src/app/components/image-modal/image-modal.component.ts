import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() show: Boolean = false;
  triggerButton;

  constructor() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.imageSrc.currentValue !== '') {
      this.imageSrc = changes.imageSrc.currentValue;
      this.showModal();
    }
  }

  ngOnInit() {
    this.triggerButton = document.getElementById('imageModalTrigger');
  }

  showModal() {
    this.triggerButton.click();
  }
}
