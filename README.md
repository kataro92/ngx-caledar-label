# NgxCaledarLabel
## A Simple date picker with custom label each day
![image](https://user-images.githubusercontent.com/6007508/123023503-adbf8e00-d401-11eb-8171-c7af23c9fa13.png)
![image](https://user-images.githubusercontent.com/6007508/123023313-60dbb780-d401-11eb-9c54-1e2b22fcfb4f.png)

## Installation
### Package (not working yet)
`npm install ngx-calendar-label --save`

### Usage

#### module.ts:
(eg: app.module.ts)

~~~
// ...
import { NgxCalendarLabelComponent } from './ngx-calendar-label/ngx-calendar-label.component';
// ...

@NgModule({
  // ...
	declarations: [
    // ...
		NgxCalendarLabelComponent,
    // ...
  ]
  // ...
})
~~~


#### in component.ts:
(eg: app.component.ts)
~~~
// ...

export class CalendarComponent implements OnInit {
  
  // ...
  testData = [
    {
      date: '2021-06-01', // The date which have data
      title: '10人', // Your custom label
    },
    {
      date: '2021-06-26', // The date which have data
      disabled: '1', // The day is disabled or not ("1": Disabled, anything else: Normal)
      title: '10人', // Your custom label
    },
  ];

  // ...
}
~~~

#### in component.html:
(eg: app.component.html)
~~~
// ...
<ngx-calendar-label value="2021-06-21" startWeek="1" [data]="testData"></ngx-calendar-label>
// ...
~~~

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
