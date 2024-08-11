import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../_services/user.service";
import {AuthService} from "../_services/auth.service";
import {User} from "../_models/user.model";
import {Subscription} from "rxjs";
import { ExcelService } from '../_services/excel.service';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy { 
  pubContent : string = '';
  user! : User;
  AuthUserSub! : Subscription;
  data: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  constructor(
    private userService : UserService,
    private authService : AuthService,
    private excelService: ExcelService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void { 
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next : user => {
        if(user) this.user = user;
      }
    })

    // this.userService.getUserPublicContent().subscribe({
    //   next : data => {
    //     this.pubContent = data;
    //   },
    //   error : err => console.log(err)
    // })
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  duplicateTable() {
    // Implement the duplicate functionality here
  }
  
  manualEntry() {
    // Implement the manual entry functionality here
  }
 

  ngOnDestroy() {
    this.AuthUserSub.unsubscribe();
  }
}
