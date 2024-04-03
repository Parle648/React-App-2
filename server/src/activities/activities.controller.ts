import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { PublicGuard } from 'src/guards/publicGuard';

@UseGuards(PublicGuard) 
@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(+id);
  }
}
