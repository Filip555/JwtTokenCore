import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = 'Pawel';

  constructor() { }

  ngOnInit() {
  }

  nameChanged(name: string) {
    this.name = name;
  }

}
