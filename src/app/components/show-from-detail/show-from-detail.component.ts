import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { JsonPipe, DatePipe } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface jsonDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-show-from-detail',
  standalone: true,
  imports: [JsonPipe, DatePipe, DataTablesModule, HttpClientModule],
  templateUrl: './show-from-detail.component.html',
  styleUrl: './show-from-detail.component.scss'
})

export class ShowFromDetailComponent implements OnInit  {

  constructor(private httpClient: HttpClient, public users: UsersService) { }

  today: Date = new Date();
  isLoading: boolean = false;
  jsonData: jsonDataType[] = [];

  onClickDeleteUser(username: string){
    this.users.deleteUserByUsername(username);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    try {
      this.isLoading = true;
      this.httpClient.get<jsonDataType[]>('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
        this.jsonData = response;
      }),
      (error: unknown) => {
        console.error('Error fetching data: ', error);
      };
    } catch (error: unknown) {
      console.error('Error fetching data: ', error);
    } finally {
      setTimeout(() => {
        this.isLoading = false; // ในกรณีเกิดข้อผิดพลาด
      }, 1000);
    }
  }
}
