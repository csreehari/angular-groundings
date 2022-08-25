import { Component, OnInit } from '@angular/core';
import { RoundBlockQuoteDirective } from '../../directives/round-block-quote.directive';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor(private direc: RoundBlockQuoteDirective) { }

  ngOnInit(): void {
  }
}
