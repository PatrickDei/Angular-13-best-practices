import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBaseModel} from "src/app/model/base.model";
import {HttpToolsService} from "src/app/service/http-tools.service";
import {environment} from "src/environments/environment";

/**
 * model name is defined in class implementations
 */
export abstract class ApiService<T extends IBaseModel> {
  protected abstract modelName: string;

  protected constructor(protected http: HttpClient){}

  read(id: string): Observable<T> {
    const url = HttpToolsService.buildURI(environment.apiURL, this.modelName, id);
    console.log('GET ' + url);
    return this.http.get<T>(url);
  }

}
