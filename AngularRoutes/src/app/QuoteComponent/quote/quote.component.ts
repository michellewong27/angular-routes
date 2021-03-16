import { Component, OnInit } from '@angular/core';
import {DataserviceService} from "src/app/Services/dataservice.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote!: string;
  aname!:string;

  constructor(private dService: DataserviceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.pipe(map ( (p:any) => p["name"])).subscribe((n:any) =>{
        this.aname = n;
      });
  }

  //on click of btn, come here & get method SelectedAuthor from dataservice
  get(){
    if(this.dService.SelectedAuthor){
      this.quote = this.dService.SelectedAuthor.quote;
    }
  }
  
}
