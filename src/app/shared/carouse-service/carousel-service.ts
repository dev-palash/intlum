import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CarousalService {

    index = 0;

    slideNo: BehaviorSubject<number> = new BehaviorSubject(0);

}
