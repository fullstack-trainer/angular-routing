import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getApiResponse();
  }

  getApiResponse(): void {
    let params = new HttpParams();
    params = params.append('page', '2');

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', '123');

    this.httpClient.get('https://reqres.in/api/users', { params, headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    console.log('test');
  }

}
