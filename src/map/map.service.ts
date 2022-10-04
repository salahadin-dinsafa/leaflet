import { Injectable } from '@nestjs/common';

import { accountLocation } from './account_location';
import { LocationType } from './type/location.type';

@Injectable()
export class MapService {

  staticMap(locationType: LocationType) {
    const { Lat, Lng } = locationType;

    if (!Lat || !Lng) {
      const location: LocationType = {
        name: "Addis Ababa",
        Lat: 8.98066,
        Lng: 38.7578
      }
      return { location: location, accountLocation: accountLocation };
    }

    return { location: locationType, accountLocation: accountLocation };
  }

}
