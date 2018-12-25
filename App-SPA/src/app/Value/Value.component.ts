import { Component, OnInit } from '@angular/core';
import { ValueService } from '../_services/Value.service';
import { ActivatedRoute } from '@angular/router';
import { Value } from '../_models/value';

@Component({
  selector: 'app-value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.scss']
})
export class ValueComponent implements OnInit {
  value: Value;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(result => {
      this.value = result['value'];
    });
  }


  // getValue() {
  //   console.log(this.route.snapshot.params['id']);
  //   this.valueService.getValue(+this.route.snapshot.params['id']).subscribe((value: Value) => {
  //     this.value = value;
  //   });
  // }
}
