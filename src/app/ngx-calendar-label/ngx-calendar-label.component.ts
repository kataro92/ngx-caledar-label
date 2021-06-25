import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-calendar-label',
  templateUrl: './ngx-calendar-label.component.html',
  styleUrls: ['./ngx-calendar-label.component.scss']
})
export class NgxCalendarLabelComponent implements OnInit {
  @ViewChild('dateInput', { static: false })
  dateInput!: ElementRef;
  @Input() value: string;
  @Input() startWeek: string;
  @Input() data: any[];
  @Input() displayType: string;
  weekDatas: any[];
  weekDayLabels: string[];
  weekDayActualLabels: any[];
  slMonth: any;
  slMonthStr: string;
  onShow: boolean;
  dclTableStyle: string;
  constructor() {
    this.weekDayLabels = ["日","月","火","水","木","金","土"];
    this.weekDatas = [];
    this.weekDayActualLabels = [];
    this.slMonthStr = '';
    this.value = '';
    this.startWeek = '';
    this.data = [];
    this.onShow = false;
    this.dclTableStyle = 'display-none';
    this.displayType = '';
  }

  ngOnInit(): void {
    if (typeof this.data === 'undefined') {
      this.data = [];
    }
    // Set to today if none value was set
    if (typeof this.value === 'undefined' || this.value === '') {
      this.value = new Date().toISOString().substring(0, 10);
    }
    // If no option start week, start at monday
    if (typeof this.startWeek === 'undefined' || this.startWeek === '') {
      this.startWeek = '0';
    }
    // "input": show a input and display calendar when click
    // "calendar": always show calendar and hide the input
    if (typeof this.displayType === 'undefined' || this.displayType === '') {
      this.displayType = 'input';
    }
    this.initData(this.value, this.startWeek, this.data);
  }

  initData(value: string , startWeek: string, data: any[]) {
    this.slMonthStr = new Date(value).toISOString().substring(0, 7).replace('-', '/');
    let slDate = new Date(value);
    let slMonth = slDate.getMonth();
    this.weekDayActualLabels = [];
    for (var d = 0; d < 7; d++) {
      let dayIdx = parseInt(startWeek) + d;
      if (dayIdx > 6) {
        dayIdx = dayIdx - 7;
      }
      const weekLabel = {
        title: this.weekDayLabels[dayIdx],
        weekDay: dayIdx,
      };
      this.weekDayActualLabels.push(weekLabel);
    }
    let startDateOfMonth: Date = new Date(value.substring(0, 7) + '-01');
    let startWeekDateOfMonth = new Date(startDateOfMonth.setDate(1 - this.countDayFromStartWeek(startDateOfMonth.getDay(), this.startWeek)));

    let endDateOfMonth: Date = new Date(value.substring(0, 7) + '-01');
    endDateOfMonth = new Date(endDateOfMonth.setMonth(endDateOfMonth.getMonth() + 1));
    endDateOfMonth = new Date(endDateOfMonth.setDate(-1));
    let endWeekDateOfMonth = new Date(endDateOfMonth.setDate(endDateOfMonth.getDate() - this.countDayFromStartWeek(endDateOfMonth.getDay(), this.startWeek)));
    endWeekDateOfMonth = new Date(endDateOfMonth.setDate(endDateOfMonth.getDate() + 7));

    // 604800000: One week
    let countRow = Math.round(endWeekDateOfMonth.getTime() - startWeekDateOfMonth.getTime()) / 604800000;
    this.weekDatas = [];
    startDateOfMonth.setDate(startDateOfMonth.getDate() - 1);
    for (var i = 0; i < countRow; i++) {
      let days = [];
      for (var d = 0; d < 7; d++) {
        const currentDate = new Date(startDateOfMonth.setDate(startDateOfMonth.getDate() + 1));
        const currrentDateStr = currentDate.toISOString().substring(0, 10);
        let dayData = {
          currentDate: currrentDateStr,
          weekDay: currentDate.getDay(),
          dayOfMonth: currentDate.getDate(),
          isCurrentMonth: slMonth === currentDate.getMonth(),
          isSelected: currrentDateStr === this.value,
          isDisabled: false,
          title: '',
        };
        for (var x = 0; x < data.length; x++) {
          if (data[x].date == currrentDateStr) {
            if (data[x].disabled == "1" || data[x].disabled == "true") {
              dayData.isDisabled = true;
            } else {
              dayData.title = data[x].title;
            }
          }
        }
        days.push(dayData);
      }
      const rowData = {
        dayDatas: days
      };
      this.weekDatas.push(rowData);
    }
    if (typeof this.dateInput != 'undefined') {
      this.dateInput.nativeElement.value = value;
    }
  }

  actPrevMonth() {
    let slMonth: Date = new Date(this.value);
    slMonth = new Date(slMonth.setMonth(slMonth.getMonth() - 1));
    this.value = slMonth.toISOString().substring(0, 10);
    this.initData(this.value, this.startWeek, this.data);
  }

  actNextMonth() {
    let slMonth: Date = new Date(this.value);
    slMonth = new Date(slMonth.setMonth(slMonth.getMonth() + 1));
    this.value = slMonth.toISOString().substring(0, 10);
    this.initData(this.value, this.startWeek, this.data);
  }

  actSelectDay(currentDate: string) {
    this.value = currentDate;
    this.initData(this.value, this.startWeek, this.data);
  }

  actFocusInput() {
    this.onShow = true;
    setTimeout(()=>{ this.validateStyle()}, 120);
  }

  actFocusoutInput() {
    this.onShow = false;
    setTimeout(()=>{ this.validateStyle()}, 120);
  }

  actFocusCalendarInput() {
    this.onShow = true;
    this.dateInput.nativeElement.focus();
  }

  validateStyle() {
    if (this.onShow) {
      this.dclTableStyle = 'display-block';
    } else {
      this.dclTableStyle = 'display-none';
    }
  }

  countDayFromStartWeek(dayOfWeek: any, startWeek: any) {
    if (dayOfWeek > startWeek) {
      return parseInt(dayOfWeek) - parseInt(startWeek);
    }
    if (dayOfWeek < startWeek) {
      return 7 - (parseInt(startWeek) - parseInt(dayOfWeek));
    }
    return 0;
  }

  numericOnly(event: { key: string; }): boolean {
    let patt = /^\d|-$/;
    let result = patt.test(event.key);
    return result;
  }

  checkIfNeedReload() {
    if (this.dateInput.nativeElement.value.length === 10) {
      this.value = this.dateInput.nativeElement.value;
      this.initData(this.value, this.startWeek, this.data);
    }
  }
}
