import { Component, OnInit } from '@angular/core';
import { PesananService } from '../../../services/pesanan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Pesanan } from 'src/app/models/pesanan.model';

@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.component.html',
  styleUrls: ['./pesanan.component.css']
})
export class PesananComponent implements OnInit {
  

  constructor(private router:Router,private route:ActivatedRoute , private pesananService:PesananService) { }
  imdbId:string;
  Detail:any;
  jumlah:number;
  tax:any;
  total:any;
  submitted = false;
  harga=Math.floor((Math.random() * 300000) + 45000);
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.imdbId = params.get('imdbID');
    })
    this.pesananService.onDetail(this.imdbId).subscribe(data => {
      //console.log(data);
      this.Detail = data;
    })
    this.tax=this.harga*0.1;
    this.total=this.harga+this.tax;

  }

  ngSubmit(form:NgForm){
 
    let data :any = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      film: form.value.film,
      harga: form.value.harga,
      total: form.value.total
    }
    

    this.pesananService.create(data).subscribe(response => { 
      console.log(response);
      this.submitted = true;
      //this.router.navigateByUrl('/order');
     },
     error => {
        console.log(error);
     });
    //
  }
}

