import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() formData: EventEmitter<any> = new EventEmitter();

  public users!: any;
  public getUserData!: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUserData();
  }

  /**
   * This method called to load all user data
   */
  getAllUserData() {
    this.userService.getAllUsers().subscribe((response: any) => {
      this.users = response;
    })
  }

  /**
   * This method called to delete user data
   * @param id: Passed the user Id
   */
  deleteRecord(id: any) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getAllUserData();
    });
  }

  /**
   * This method called to load user data based on userId
   */
  getUserDataById(userId: any) {
    this.userService.getUserById(userId).subscribe((response: any) => {
      this.getUserData = response;
      this.formData.emit(this.getUserData);

      this.router.navigate([`users/form/${userId}`]);
    })
  }
}
