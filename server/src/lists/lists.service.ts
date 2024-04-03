import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ListsService {
  constructor (private readonly dataBaseService: DatabaseService) {}

  logger = new Logger('ListsService')

  async create(createListDto: {
    listData: Prisma.ListsCreateInput,
    action: Prisma.ListActivitiesCreateInput
  }) {
    const {listData, action} = createListDto;

    this.logger.log(`User create list "${action.list_name}". DTO = ${JSON.stringify(createListDto)}`)

    const createList = await this.dataBaseService.lists.create({
      data: {
        list_name: listData.list_name,
        board_id: listData.board_id,
        listActivities: {
          create: [
            action
          ]
        }
      },
      include: {
        listActivities: true
      }
    })

    return createList
  }

  async findAll(query) {
    this.logger.log(`User get all lists`)
    if (+query.board_id) {
      return this.dataBaseService.lists.findMany({
        where: {
          board_id: +query.board_id
        }
      });
    } else {
      return this.dataBaseService.lists.findMany();
    }
  }

  async findOne(id: number) {
    return this.dataBaseService.lists.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateListDto: {
    listData: Prisma.ListsCreateInput,
    action: Prisma.ListActivitiesCreateInput
  }) {

    const {listData, action} = updateListDto;

    this.logger.log(`User update list "${action.list_name}". DTO = ${JSON.stringify(updateListDto)}`)

    const listUpdate = await this.dataBaseService.lists.update({
      where: {
        id,
      },
      data: {
        list_name: listData.list_name,
        listActivities: {
          create: [
            action
          ]
        }
      },
      include: {
        listActivities: true
      }
    })

    const lists = await this.dataBaseService.lists.findMany()

    return { status: 200, lists: lists}
  }

  async remove(id: number, deleteListDto) {
    this.logger.log(`User delete list which id = ${id}`)
    const activitiy = this.dataBaseService.listActivities.create({
      data: {
        "activity_type": "deleteList",
        "list_name": deleteListDto.list_name,
        "from": "",
        "to": "Important",
        board_id: 1
      }
    })
    const deletelist = this.dataBaseService.lists.delete({
      where: {
        id,
      }
    })

    return this.dataBaseService.$transaction([activitiy, deletelist])
  }
}
