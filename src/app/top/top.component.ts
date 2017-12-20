import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  @Input() url:string;
  top:any;
  title:string;
  imgUrl:string;
  constructor() {

   }

  ngOnInit() {
    var self=this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          debugger;
          self.top= JSON.parse(xhr.response);
          console.log(self.top);
          self.imgUrl=self.top.poster_path;
          self.title=self.top.original_title;
        }
    };
    xhr.open("GET", this.url, true);
    xhr.send();
  }

}
