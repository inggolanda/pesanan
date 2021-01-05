import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiService : ApiService) { }

  imdbId: any;
  Detail: any;
  ngOnInit(): void {
    //this.imdbId= +this.route.snapshot.paramMap.get('imdbID');
    this.route.paramMap.subscribe(params => {
      this.imdbId = params.get('imdbID');
    })
    this.apiService.onDetail(this.imdbId).subscribe(data => {
      console.log(data);
      this.Detail = data;
    })
  }

}
