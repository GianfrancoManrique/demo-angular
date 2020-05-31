import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.css']
})
export class ListpersonComponent implements OnInit {

  @Input() person:{};
  @Input() indexPerson:number;

  constructor() { }

  ngOnInit(): void {
  }

}
