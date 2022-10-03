import { Controller, Get, Post, Render, Req } from '@nestjs/common';
import { Request } from 'express';
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
  getMap() {
    const file = this.mapService.staticMap();
    return { file }
  }

  @Post()
  @Render('index')
  dynamicMap(@Req() req: Request) {
    const file = this.mapService.dynamicMap(req.body);
    return { file }
  }
}
