import { Component, OnInit } from '@angular/core';
import { PesananService } from '../../../services/pesanan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Pesanan } from 'src/app/models/pesanan.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute , private pesananService:PesananService) { }
  
  id:string;
  title:string;
  poster:any;
  detail:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.title = params.get('title');
      console.log(this.id,this.title);
    })
    this.pesananService.onposter(this.title).subscribe(datap => {
      //console.log(data);
      this.poster = datap;
    })

    this.pesananService.onGet(this.id).subscribe(data => {
      //console.log(data);
      this.detail = data['pesanan'];
    })
  }

  submitted = false;

  ngSubmit(form:NgForm){
    const data : Pesanan ={
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      film: form.value.film,
      harga: form.value.harga,
      total: form.value.total
    }

    console.log(data)
    this.pesananService.update(this.id,data).subscribe(response => { 
      console.log(response);
      this.submitted = true;
      this.router.navigateByUrl('/order');
     },
     error => {
        console.log(error);
     });
  }

}
