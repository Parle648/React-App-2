"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let BoardsService = class BoardsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.logger = new common_1.Logger('BoardsService');
    }
    ;
    async create(createBoardDto) {
        try {
            const board = await this.databaseService.boards.create({
                data: {
                    name: createBoardDto.name
                }
            });
            const boards = await this.databaseService.boards.findMany();
            this.logger.log(`User create board with name "${createBoardDto.name}" id = ${board.id}`);
            return { status: 200, boards };
        }
        catch (error) {
            return { status: 404, error };
        }
    }
    async findAll() {
        const boards = await this.databaseService.boards.findMany();
        this.logger.log(`User get all boards`);
        return { status: 200, boards };
    }
    async update(id, updateBoardDto) {
        try {
            const updateBoard = await this.databaseService.boards.update({
                where: {
                    id: +id
                },
                data: {
                    ...updateBoardDto
                }
            });
            const boards = await this.databaseService.boards.findMany();
            this.logger.log(`User update board which id = ${id}`);
            return { status: 200, boards };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
        return `This action updates a #${id} board`;
    }
    async remove(id) {
        try {
            const board = await this.databaseService.boards.delete({
                where: {
                    id: +id
                }
            });
            const lists = await this.databaseService.lists.deleteMany({
                where: {
                    board_id: +id
                }
            });
            const boards = await this.databaseService.boards.findMany();
            this.logger.log(`User delete board with id=${id}`);
            return { status: 200, boards };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], BoardsService);
//# sourceMappingURL=boards.service.js.map