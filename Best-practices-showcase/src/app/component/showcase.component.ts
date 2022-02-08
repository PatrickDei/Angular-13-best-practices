import { Component, OnInit } from '@angular/core';
import {TestModelApiService} from "src/app/service/ModelContainedRoute/test-model.api.service";
import {TestServiceApiService} from "src/app/service/ServiceContainedRoute/test-service-api.service";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  constructor(private modelsApiService: TestModelApiService, private serviceApiService: TestServiceApiService) { }

  ngOnInit(): void {
    this.modelsApiService.read('id1').subscribe(res => {
      console.log(res);
    })

    this.serviceApiService.read('id2').subscribe(res => {
      console.log(res);
    })
  }

}
