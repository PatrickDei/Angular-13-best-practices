import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SomeModel} from "src/app/model/base.model";
import {ApiService} from "src/app/service/ModelContainedRoute/api.service";

@Injectable({
  providedIn: 'root'
})
export class TestModelApiService extends ApiService<SomeModel>{
  constructor(protected http: HttpClient) {
    super(http, SomeModel);
  }
}
