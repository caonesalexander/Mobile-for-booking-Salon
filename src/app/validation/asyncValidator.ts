import { UniqueService } from '../services/unique.service';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

import {of, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

export  class AsyncValidator{

    constructor(private uniqueService: UniqueService){
    }

    static checkUserName(uniqueService: UniqueService){
        return (control: AbstractControl) => timer(1000).pipe(
                switchMap(() => uniqueService.checkUserName(control.value).then(res =>
                    //console.log(typeof res);
                     res ? { shouldBeUnique: true } : null
                  ))


            );
     }
}
