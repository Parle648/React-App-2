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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TasksService = class TasksService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.logger = new common_1.Logger('TasksService');
    }
    async create(createTasksDto) {
        const { taskData, action } = createTasksDto;
        try {
            await this.databaseService.tasks.create({
                data: {
                    ...taskData,
                    activities: {
                        create: [
                            action
                        ]
                    }
                },
                include: {
                    activities: true
                }
            });
            this.logger.log(`User create task with name - "${action.task_name}". DTO is ${JSON.stringify(createTasksDto)}`);
            const tasks = await this.databaseService.tasks.findMany();
            return { status: 201, tasks };
        }
        catch (error) {
            this.logger.debug(`User failed to create task - "${action.task_name}". DTO is ${JSON.stringify(createTasksDto)}`);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    async findAll() {
        try {
            const tasks = await this.databaseService.tasks.findMany();
            this.logger.log(`User get all tasks`);
            return {
                status: 200,
                tasks
            };
        }
        catch (error) {
            this.logger.debug(`User failed to get all tasks. error = ${error}`);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    async findOne(id) {
        try {
            const tasks = await this.databaseService.tasks.findUnique({
                where: { id }
            });
            if (tasks === null) {
                this.logger.debug(`User failed to get all task with id = ${id}`);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.FORBIDDEN,
                    error: 'There is no that task',
                }, common_1.HttpStatus.FORBIDDEN, {
                    cause: 'There is no that task'
                });
            }
            else {
                this.logger.log(`User get specific task which id = ${id}`);
                return {
                    status: 200,
                    tasks
                };
            }
        }
        catch (error) {
            this.logger.debug(`User failed to get all task with id = ${id} error = ${error}`);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    async update(id, updateTasksDto) {
        const { taskData, action } = updateTasksDto;
        try {
            const taskUpdate = await this.databaseService.tasks.update({
                where: {
                    id,
                },
                data: {
                    ...taskData,
                    activities: {
                        create: [
                            action
                        ]
                    }
                },
                include: {
                    activities: true
                }
            });
            this.logger.log(`User update task wich name - "${action.task_name}". DTO is ${JSON.stringify(updateTasksDto)}`);
            const tasks = await this.databaseService.tasks.findMany();
            return { status: 200, tasks };
        }
        catch (error) {
            this.logger.debug(`User failed to update task "${action.task_name}" error = ${error}`);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
    async remove(id, taskDto) {
        try {
            await this.databaseService.tasks.delete({
                where: { id },
            });
            this.logger.log(`User delete task which id = ${id}`);
            await this.databaseService.tasksActivities.create({
                data: {
                    activity_type: "deleteTask",
                    task_name: taskDto.task_name,
                    from: "",
                    to: taskDto.task_name,
                    task_property: '',
                    board_id: 1
                }
            });
            return { status: 200 };
        }
        catch (error) {
            this.logger.debug(`User failed to delete task with id: ${id} error = ${error}`);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: error,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map