import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gf-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent {
  sectionTitle='Title'
  pageTitle='Subtitle'

 @Output() eventEmmit: EventEmitter<any> = new EventEmitter<any>();
 //create public event, so that the parent component can use it

  public sendData(sectionTitle: any, pageTitle: any){
    this.eventEmmit.emit(this.sendData)
  }
}

