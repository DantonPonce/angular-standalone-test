import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ButtonComponent } from './components/button/button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'standalone-class';
  nameValue: string = '';
  apiValue$!: Observable<any>;

  constructor(http: HttpClient ){
    this.apiValue$ = http.get('https://dummyjson.com/products/1')
  }
}
