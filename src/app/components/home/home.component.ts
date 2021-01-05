import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService : ApiService) { }
    
    Film: [];
    namess: string;
    harga=Math.floor((Math.random() * 300000) + 45000);

    ngOnInit(): void {
      console.log(this.Film)
      
    }

    getInput() {
      console.log(this.namess)
      this.getName(this.namess);
    }

    getName(name) {
      this.apiService.onGet(name).subscribe( data => {
        console.log(data);  
        this.Film = data['Search'];
        console.log('ada', this.Film);
          
      })
    }

    tampil(){
      
    }

}
