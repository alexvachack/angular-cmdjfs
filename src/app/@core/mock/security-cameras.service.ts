import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  private cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: 'assets/images/camara1.jpeg',
    },
    {
      title: 'Camera #2',
      source: 'assets/images/camara2.jpeg',
    },
    {
      title: 'Camera #3',
      source: 'assets/images/camara3.jpeg',
    },
    {
      title: 'Camera #4',
      source: 'assets/images/camara4.jpeg',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
