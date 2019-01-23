import { UserService } from './../_services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './Profile-edit.component.html',
  styleUrls: ['./Profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  @Input() name: string;
  @Output() nameChanged = new EventEmitter<string>();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  changeName() {
    this.nameChanged.emit(this.name);
    this.userService.changeName(this.name);
  }
}
