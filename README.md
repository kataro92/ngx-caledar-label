# ngx-calendar-label

A simple Angular date picker component with custom labels for each day.

![image](https://user-images.githubusercontent.com/6007508/123023503-adbf8e00-d401-11eb-8171-c7af23c9fa13.png)
![image](https://user-images.githubusercontent.com/6007508/123023313-60dbb780-d401-11eb-9c54-1e2b22fcfb4f.png)
![image](https://user-images.githubusercontent.com/6007508/123387466-02aa0280-d5c2-11eb-8940-db32985a47f0.png)

## Features

- Display a calendar with custom labels on specific dates
- Configurable start day of the week
- Two display modes: inline input or always-visible calendar
- Disable specific dates
- Navigate between months

## Installation

```bash
npm install ngx-calendar-label --save
```

## Usage

### 1. Import the component

Add `NgxCalendarLabelComponent` to your module declarations:

```typescript
import { NgxCalendarLabelComponent } from './ngx-calendar-label/ngx-calendar-label.component';

@NgModule({
  declarations: [
    NgxCalendarLabelComponent,
  ],
})
export class AppModule {}
```

### 2. Prepare your data

Define an array of date entries with labels in your component:

```typescript
export class AppComponent {
  calendarData = [
    {
      date: '2021-06-01',
      title: '10人',
    },
    {
      date: '2021-06-15',
      title: '5人',
    },
    {
      date: '2021-06-26',
      disabled: '1',
      title: '休み',
    },
  ];
}
```

### 3. Add the component to your template

```html
<ngx-calendar-label
  value="2021-06-21"
  startWeek="1"
  displayType="input"
  [data]="calendarData">
</ngx-calendar-label>
```

## API

### Inputs

| Input         | Type     | Default   | Description                                                                 |
|---------------|----------|-----------|-----------------------------------------------------------------------------|
| `value`       | `string` | today     | Selected date in `YYYY-MM-DD` format                                        |
| `startWeek`   | `string` | `"0"`     | Day the week starts on (`"0"` = Sunday, `"1"` = Monday, etc.)               |
| `data`        | `any[]`  | `[]`      | Array of date entries (see below)                                           |
| `displayType` | `string` | `"input"` | `"input"` shows a text input that toggles the calendar; `"calendar"` always shows the calendar |

### Data entry format

| Property   | Type     | Required | Description                                              |
|------------|----------|----------|----------------------------------------------------------|
| `date`     | `string` | Yes      | Date in `YYYY-MM-DD` format                              |
| `title`    | `string` | No       | Custom label to display on the date cell                 |
| `disabled` | `string` | No       | `"1"` or `"true"` to disable the date; omit for normal   |

## Development

```bash
# Start dev server at http://localhost:4200/
ng serve

# Build the project
ng build

# Run unit tests
ng test
```

## License

[MIT](./LICENSE)
