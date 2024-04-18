import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface jsonDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-btn-function',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './btn-function.component.html',
  styleUrl: './btn-function.component.scss'
})
export class BtnFunctionComponent {

  constructor(private httpClient: HttpClient) { }

  onObservableLoad() {
    this.httpClient.get<jsonDataType>('https://jsonplaceholder.typicode.com/posts/1').subscribe((response1) => {
      alert(JSON.stringify(response1));
      this.httpClient.get<jsonDataType>('https://jsonplaceholder.typicode.com/posts/2').subscribe((response2) => {
        alert(JSON.stringify(response2));
      }), (error: unknown) => {
        console.error('Error fetching data1 : ', error);
      };
    }), (error: unknown) => {
      console.error('Error fetching data2 : ', error);
    };
  }

  onPromiseLoad() {
    this.httpClient.get<jsonDataType>('https://jsonplaceholder.typicode.com/posts/3').toPromise().then(res => {
      alert(JSON.stringify(res));
      return res;
    })
    this.httpClient.get<jsonDataType>('https://jsonplaceholder.typicode.com/posts/4').toPromise().then(res => {
      alert(JSON.stringify(res));
      return res;
    })
  }

  async onAsyncAwaitLoad() {
    const result1 = await this.httpClient.get<jsonDataType>('https://jsonplaceholder.typicode.com/posts/5').toPromise();
    alert(JSON.stringify(result1));
    const result2 = await this.httpClient.get<jsonDataType>('https://jsonplaceholder.typicode.com/posts/6').toPromise();
    alert(JSON.stringify(result2));
  }
}
