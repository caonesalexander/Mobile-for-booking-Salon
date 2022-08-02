import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { console.log('Your storage provider is working here !'); }

}
