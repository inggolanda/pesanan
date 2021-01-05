import { Component, OnInit } from '@angular/core';
import { Pesanan } from 'src/app/models/pesanan.model';
import { PesananService} from '../../services/pesanan.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  constructor(private activatedRoute : ActivatedRoute, private router : Router, private pesananService : PesananService) { }
  order:any;
  ngOnInit(): void {
    this.pesananService.onGetall().subscribe( data => {
      console.log(data);  
      this.order = data;
      console.log(this.order)
   })
  }

  deleteorder(id){

    this.pesananService.delete(id).subscribe(response=>{
        console.log(response);
        this.router.navigateByUrl('/order')
    })

  }
}
