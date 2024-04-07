import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BoardsService {
  constructor (private readonly databaseService: DatabaseService) {};

  logger = new Logger('BoardsService');

  async create(createBoardDto: any) {
    try {
      const board = await this.databaseService.boards.create({
        data: {
          name: createBoardDto.name
        }
      })

      const boards = await this.databaseService.boards.findMany()

      this.logger.log(`User create board with name "${createBoardDto.name}" id = ${board.id}`)
      
      return { status: 200, boards };
    } catch (error) {
      return {status: 404, error}
    }
  }

  async findAll() {
    const boards = await this.databaseService.boards.findMany()
    this.logger.log(`User get all boards`)
    return { status: 200, boards };
  }

  update(id: number, updateBoardDto: any) {
    this.logger.log(`User update board`)
    return `This action updates a #${id} board`;
  }

  async remove(id: number) {
    try {
      const board = await this.databaseService.boards.delete({
        where: {
          id: +id
        }
      })

      const boards = await this.databaseService.boards.findMany()

      this.logger.log(`User delete board with id=${id}`)
      
      return { status: 200, boards };
    } catch (error) {
      return {status: 404, error}
    }
  }
}
