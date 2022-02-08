import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SomeModel} from "src/app/model/base.model";
import {ApiService} from "src/app/service/ServiceContainedRoute/api.service";

@Injectable({
  providedIn: 'root'
})
export class TestServiceApiService extends ApiService<SomeModel>{
  protected modelName = 'SomeModels';

  constructor(protected http: HttpClient) {
    super(http);
  }
}
