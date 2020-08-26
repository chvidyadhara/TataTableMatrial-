import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SrvUserService } from 'src/app/srv-user.service';
import { userdata } from 'src/app/userdata';

@Component({
  selector: 'app-userdatadatatable',
  templateUrl: './userdatadatatable.component.html',
  styleUrls: ['./userdatadatatable.component.css']
})
export class UserdatadatatableComponent implements OnInit {
  userlist: object;
  ELEMENT_DATA: userdata[];
  displayedColumns = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private srv: SrvUserService) { }
  public userdis() {
    this.srv.servdata().subscribe(report => {
      this.dataSource.data = report as userdata[];

    })
  }
  ngOnInit() {
    this.userdis()
  }

}

