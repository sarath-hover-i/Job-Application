import { Component, OnInit } from '@angular/core';

interface Qualification {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  qualifications: Qualification[] | undefined;
  selectedQualification: Qualification | undefined;

  title = 'jobApplication';
  name: string = '';
  phone: number | undefined;
  email: string = '';

  constructor() {}

  ngOnInit(): void {
    this.qualifications = [
      { name: 'Degree', code: 'DEG' },
      { name: 'Diploma', code: 'DIP' },
      { name: 'Engineering', code: 'ENGG' },
    ];
  }
}
