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
exports.ListsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ListsService = class ListsService {
    constructor(dataBaseService) {
        this.dataBaseService = dataBaseService;
        this.logger = new common_1.Logger('ListsService');
    }
    async create(createListDto) {
        const { listData, action } = createListDto;
        this.logger.log(`User create list "${action.list_name}". DTO = ${JSON.stringify(createListDto)}`);
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
        });
        return createList;
    }
    async findAll(query) {
        this.logger.log(`User get all lists`);
        if (+query.board_id) {
            return this.dataBaseService.lists.findMany({
                where: {
                    board_id: +query.board_id
                }
            });
        }
        else {
            return this.dataBaseService.lists.findMany();
        }
    }
    async findOne(id) {
        return this.dataBaseService.lists.findUnique({
            where: {
                id,
            }
        });
    }
    async update(id, updateListDto) {
        const { listData, action } = updateListDto;
        this.logger.log(`User update list "${action.list_name}". DTO = ${JSON.stringify(updateListDto)}`);
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
        });
        const lists = await this.dataBaseService.lists.findMany();
        return { status: 200, lists: lists };
    }
    async remove(id, deleteListDto) {
        this.logger.log(`User delete list which id = ${id}`);
        const activitiy = this.dataBaseService.listActivities.create({
            data: {
                "activity_type": "deleteList",
                "list_name": deleteListDto.list_name,
                "from": "",
                "to": "Important",
                board_id: 1
            }
        });
        const deletelist = this.dataBaseService.lists.delete({
            where: {
                id,
            }
        });
        return this.dataBaseService.$transaction([activitiy, deletelist]);
    }
};
exports.ListsService = ListsService;
exports.ListsService = ListsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ListsService);
//# sourceMappingURL=lists.service.js.map