import { Injectable, signal } from '@angular/core';
import { BusinessInfo } from '../models/business.model';
import { ELMAESTRO_ANNOUNCEMENTS, ELMAESTRO_BUSINESS_INFO } from '../data/business.data';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly business = signal<BusinessInfo>(ELMAESTRO_BUSINESS_INFO);
  readonly announcements = signal<string[]>(ELMAESTRO_ANNOUNCEMENTS);
  readonly currentAnnouncementIndex = signal<number>(0);

  // Future API base URL placeholder
  readonly apiBaseUrl = signal<string>('https://api.elmaestro.com/v1');
  readonly isDemoMode = signal<boolean>(true);

  nextAnnouncement(): void {
    const list = this.announcements();
    if (list.length > 0) {
      this.currentAnnouncementIndex.update(idx => (idx + 1) % list.length);
    }
  }
}
