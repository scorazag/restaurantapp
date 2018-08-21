import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images = ["mexicana.jpg","francesa.jpg","japonesa.jpg"]
  constructor() { }

  ngOnInit() {
  }

}
