import { Injectable } from '@nestjs/common';

import { accountLocation } from './account_location';
import { LocationType } from './type/location.type';
import { LocationWithPolygon } from './type/polygon-location.type';

@Injectable()
export class MapService {

  staticMap(locationType: LocationType) {
    const { name, Lat, Lng, polygon_svg } = locationType;

    let polygon: number[] = [];
    let location: LocationWithPolygon;

    /**
     * If polygon is needed you can access the point location
     * from polygon variable
     */
    if (polygon_svg) {
      const arrayPolygon: string[] = polygon_svg.split(',');
      arrayPolygon.forEach(point => {
        polygon.push(parseFloat(point));
      })
    }
    if (polygon.length === 0) {
      polygon = [9.0232873, 9.0233873, 38.7939966, 38.7940966];
    }

    if (!Lat || !Lng) {
      location = {
        name: "Addis Ababa",
        Lat: 8.98066,
        Lng: 38.7578,
        polygon
      }
    } else {
      location = {
        name,
        Lat,
        Lng,
        polygon
      }
    }

    return { location: location, accountLocation: accountLocation };
  }

}
