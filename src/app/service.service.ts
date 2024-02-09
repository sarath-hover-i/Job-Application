import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  getTableData() {
    return [
      {
        name: 'Luffy',
        phone: 123456789,
        email: 'Luffy123@gmail.com',
        currentAddress: 'Skypia',
        permanentAddress: 'windmill Town',
        qualifications: 'Caption',
        totalExperience: '10 Years',
        releventExperience: '8 Years',
      },
      {
        name: 'Zoro',
        phone: 987654321,
        email: 'Zoro987@gmail.com',
        currentAddress: 'Skypia',
        permanentAddress: 'Shimutsoki village',
        qualifications: 'Vice-caption',
        totalExperience: '15 Years',
        releventExperience: '8 Years',
      },
      {
        name: 'Sanji',
        phone: 987456321,
        email: 'Sanji842@gmail.com',
        currentAddress: 'Skypia',
        permanentAddress: 'Germa Kingdom',
        qualifications: 'Cheaf',
        totalExperience: '20 Years',
        releventExperience: '7 Years',
      },
    ];
  }

  getTable() {
    return Promise.resolve(this.getTableData());
  }

  // __________ Mock APi __________

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private httpClient: HttpClient) {}

  // __________ Qualifications __________

  getQualificationsAPi(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // __________ Total Experience __________

  getTotalExperienceAPi(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // __________ Relevent Experience __________

  getReleventExperienceAPi(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
