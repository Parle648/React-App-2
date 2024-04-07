import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
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

  async update(id: number, updateBoardDto: any) {
    try {
      const updateBoard = await this.databaseService.boards.update({
        where: {
          id: +id
        },
        data: {
          ...updateBoardDto
        }
      })

      const boards = await this.databaseService.boards.findMany();

      this.logger.log(`User update board which id = ${id}`)

      return {status: 200, boards}
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
    return `This action updates a #${id} board`;
  }

  async remove(id: number) {
    try {
      const board = await this.databaseService.boards.delete({
        where: {
          id: +id
        }
      })

      const lists = await this.databaseService.lists.deleteMany({
        where: {
          board_id: +id
        }
      });

      const boards = await this.databaseService.boards.findMany()

      this.logger.log(`User delete board with id=${id}`)
      
      return { status: 200, boards };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
}
