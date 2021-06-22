import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-caledar-label';
  testData = [
    {
      date: '2021-06-01',
      title: '10人',
    },
    {
      date: '2021-06-02',
      title: '20人',
    },
    {
      date: '2021-06-03',
      title: '6人',
    },
    {
      date: '2021-06-04',
      title: '10人',
    },
    {
      date: '2021-06-07',
      title: '10人',
    },
    {
      date: '2021-06-08',
      title: '10人',
    },
    {
      date: '2021-06-09',
      title: '20人',
    },
    {
      date: '2021-06-10',
      disabled: '1',
      title: '1人',
    },
    {
      date: '2021-06-11',
      title: '10人',
    },
    {
      date: '2021-06-12',
      title: '15人',
    },
    {
      date: '2021-06-13',
      disabled: '1',
      title: '10人',
    },
    {
      date: '2021-06-17',
      title: '6人',
    },
    {
      date: '2021-06-19',
      disabled: '1',
      title: '10人',
    },
    {
      date: '2021-06-20',
      disabled: '1',
      title: '10人',
    },
    {
      date: '2021-06-26',
      disabled: '1',
      title: '10人',
    },
  ];
}
