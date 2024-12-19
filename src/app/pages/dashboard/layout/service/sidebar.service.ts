import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpen = new BehaviorSubject<boolean>(false); // Initial state is closed

  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value); // Toggle the state
  }

  getSidebarState() {
    return this.sidebarOpen.asObservable(); // Return the observable
  }
}