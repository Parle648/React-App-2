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

    return { status: 200, boards };
  }

  update(id: number, updateBoardDto: any) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
