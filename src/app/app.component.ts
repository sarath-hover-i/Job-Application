import { Component, OnInit } from '@angular/core';

interface Qualification {
  name: string;
  code: string;
}
interface TotalExperience {
  name: string;
}
interface ReleventExperience {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  qualifications: Qualification[] | undefined;
  selectedQualification: Qualification | undefined;

  totalexperiences: TotalExperience[] | undefined;
  selectedTotalExperience: TotalExperience | undefined;

  releventExperiences: ReleventExperience[] | undefined;
  selectedReleventExperience: ReleventExperience | undefined;

  currentAddress!: string;
  permanentAddress!: string;

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
    this.totalexperiences = [
      { name: '1 Year' },
      { name: '2 Year' },
      { name: '3 Year' },
      { name: '4 Year' },
      { name: '5 Year' },
      { name: 'Above 5' },
    ];
    this.releventExperiences = [
      { name: '1 Year' },
      { name: '2 Year' },
      { name: '3 Year' },
      { name: '4 Year' },
      { name: '5 Year' },
      { name: 'Above 5' },
    ];
  }
}
