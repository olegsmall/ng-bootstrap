import {Injectable} from '@angular/core';
import {NgbConfig} from '../ngb-config';

/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgbCarouselConfig {
  animation: boolean;
  interval = 5000;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;

  constructor(ngbConfig: NgbConfig) { this.animation = ngbConfig.animation; }
}
