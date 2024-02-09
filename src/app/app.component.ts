import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

interface Qualification {
  name: string;
}
interface TotalExperience {
  name: string;
}
interface ReleventExperience {
  name: string;
}

interface TableColumn {
  header: string;
  field: string;
}

interface TableProduct {
  name?: string;
  phone?: number;
  email?: string;
  currentAddress?: string;
  permanentAddress?: string;
  qualifications?: string;
  totalExperience?: string;
  releventExperience?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // __________ Qualification Dropdown __________

  qualifications: Qualification[] | undefined;
  selectedQualification: Qualification | undefined;

  // __________ Total Experience Dropdown __________

  totalExperiences: TotalExperience[] | undefined;
  selectedTotalExperience: TotalExperience | undefined;

  // __________ Relevent Experience Dropdown __________

  releventExperiences: ReleventExperience[] | undefined;
  selectedReleventExperience: ReleventExperience | undefined;

  // __________ Address Text Area __________

  currentAddress!: string;
  permanentAddress!: string;

  title = 'jobApplication';

  // __________ Input Fields __________

  name: string = '';
  phone: number | undefined;
  email: string = '';

  // __________ Table Field __________

  tableProducts!: TableProduct[];

  tableCols!: TableColumn[];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // __________ Table Field __________

    this.serviceService.getTable().then((data) => {
      this.tableProducts = data;
    });
    this.tableCols = [
      { header: 'Name', field: 'name' },
      { header: 'Phone', field: 'phone' },
      { header: 'Email', field: 'email' },
      { header: 'Current Address', field: 'currentAddress' },
      { header: 'Permanent Address', field: 'permanentAddress' },
      { header: 'Qualifications', field: 'qualifications' },
      { header: 'Total Experience', field: 'totalExperience' },
      { header: 'Relevent Experience', field: 'releventExperience' },
    ];

    // __________ Qualifications from API __________

    this.serviceService.getQualificationsAPi().subscribe((data) => {
      this.qualifications = data.users.map(
        (itm: { company: { department: string } }) => ({
          company: itm.company.department,
        })
      );

      console.log('data....:', data.users);
      console.log('Qualifications:', this.qualifications);
    });

    // __________ Total Experience from API __________

    this.serviceService.getTotalExperienceAPi().subscribe((data) => {
      this.totalExperiences = data.users.map(
        (itm: { bank: { cardExpire: string } }) => ({
          totalExp: itm.bank.cardExpire,
        })
      );
      console.log('Tdata...:', this.totalExperiences);
    });

    // __________ Relevent Experience from API __________

    this.serviceService.getReleventExperienceAPi().subscribe((data) => {
      this.releventExperiences = data.users.map(
        (itm: { crypto: { network: string } }) => ({
          releventExp: itm.crypto.network,
        })
      );
    });
  }
}
