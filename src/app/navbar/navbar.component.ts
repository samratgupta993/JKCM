import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuItems: MenuItem[] = [
    { label: 'Our Products' },
    { label: 'Traning (ME)' },
    { label: 'About Us' },
    { label: 'Contact Us' }
  ];

}
