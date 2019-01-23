import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  name: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUsername.subscribe(name => this.name = name);
  }
}
