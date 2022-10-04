import { Controller, Get, Post, Query, Render, Req, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';

import { LocationDto } from './dto/location.dto';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(
    private readonly mapService: MapService,
  ) {
  }
  @Get('render')
  successfull(): string {
    return 'Hello Render';
  }


  @Get()
  @Render('index')
  getMap(@Query(new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
  })) query?: LocationDto) {
    const file = this.mapService.staticMap(query);
    return { file }
  }
}
