import { Component, OnInit } from '@angular/core';
import {DataserviceService} from 'src/app/Services/dataservice.service';
import {Author} from 'src/app/Interfaces/app.author';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list!: Array<Author>;
  selectedAuthor!: Author;

  constructor(private dService: DataserviceService) { }

  ngOnInit(): void {
    this.list = this.dService.Authors;
  }

  selectAuthor(a:Author){
    this.dService.SelectedAuthor = a;
    this.selectedAuthor = this.dService.SelectedAuthor;
  }

  isSelected(a:Author){
    return this.selectedAuthor === a;
  }
}
