import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() smallPicture: string = "";
  @Input() smallReport: string = "";
  @Input() smallTitle: string = "";
  @Input() smallContent: string = "";
}
