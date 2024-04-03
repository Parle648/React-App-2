import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ListsService } from './lists.service';
import { PublicGuard } from 'src/guards/publicGuard';

@UseGuards(PublicGuard) 
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  create(@Body() createListDto: any) {
    return this.listsService.create(createListDto);
  }

  @Get()
  findAll() {
    return this.listsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListDto: any) {
    return this.listsService.update(+id, updateListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() deleteListDto: any) {
    return this.listsService.remove(+id, deleteListDto);
  }
}
