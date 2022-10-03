import { Injectable } from '@nestjs/common';
import { accountLocation } from './account_location';
@Injectable()
export class MapService {

  staticMap() {
    return { location: accountLocation[0], accountLocation: accountLocation };
  }
  dynamicMap(file: any) {
    const { place } = file;
    const location = accountLocation.find(loc => loc.fields.name.includes(place));
    return { location: location, accountLocation: accountLocation };
  }
}
