import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenDetectorService {
  screenWidth = window.innerWidth;
}
