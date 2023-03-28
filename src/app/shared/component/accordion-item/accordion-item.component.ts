import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html'
})
export class AccordionItemComponent {
  onClickAccordion(event: any) {
    event.target.classList.toggle('collapsed');
    event.target.parentNode.nextElementSibling.classList.toggle('collapse');
  }
}
