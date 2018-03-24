import { Component, OnInit,Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnChanges{


  title:string = "DETAILS";
  hideFormErrMessage: boolean =true;
  @Input() item;
  @Output() emitedData = new EventEmitter();
  formItem:any;

  constructor(private listServiceService: ListServiceService) { }

  ngOnInit() {

  }

  ngOnChanges(changes) {
     console.log(changes)
  }

  sumbitForm() {
      //in real life we will also send data to server like in the comment  below
     // this.listServiceService.addItem(this.item);
     this.emitedData.emit(this.item);
  }

}
