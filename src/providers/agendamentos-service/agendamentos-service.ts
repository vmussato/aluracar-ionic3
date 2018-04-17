import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AgendamentosServiceProvider {

  private _url = 'http://localhost:8080/api'

  constructor(public _http: HttpClient) {
  }

  agenda(agendamento) {
    return this._http
              .post(this._url + '/agendamento/agenda', agendamento)
              .do(() => agendamento = true)
              .catch((err) => Observable.of(new Error('Falha no agendamento, tente novamente mais tarde!')))
  }

}
