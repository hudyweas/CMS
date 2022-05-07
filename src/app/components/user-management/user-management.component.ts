import { Component, OnInit } from '@angular/core';
import { DatabaseConnectorService } from 'src/app/services/shared-services/database-connector.service';

@Component({
  selector: 'cms-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  constructor(private dbConnector: DatabaseConnectorService) {}

  public users;

  ngOnInit(): void {
    this.dbConnector.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
