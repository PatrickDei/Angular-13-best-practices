import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBaseModel} from "src/app/model/base.model";
import {HttpToolsService} from "src/app/service/http-tools.service";
import {environment} from "src/environments/environment";

/**
 * model name is fetched from the type by implementing an activator
 */
export abstract class ApiService<T extends IBaseModel> {
  protected constructor(protected http: HttpClient, protected type: new () => T){}

  modelName<T extends IBaseModel>(type:T): string {
    return type.apiRoute;
  }

  read(id: string): Observable<T> {
    const url = HttpToolsService.buildURI(environment.apiURL, this.modelName(new this.type()), id);;
    console.log('GET ' + url);
    return this.http.get<T>(url);
  }
}
