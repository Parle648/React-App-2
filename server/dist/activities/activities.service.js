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
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ActivitiesService = class ActivitiesService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.logger = new common_1.Logger('ActivitiesService');
    }
    async create(createActivityDto) {
        return this.databaseService.tasksActivities.create({ data: createActivityDto });
    }
    findAll() {
        this.logger.log(`User get all activities`);
        const tasksActivities = this.databaseService.tasksActivities.findMany();
        const lsitsActivities = this.databaseService.listActivities.findMany();
        return this.databaseService.$transaction([tasksActivities, lsitsActivities]);
    }
    async findOne(id) {
        this.logger.log(`User get activities for task which id = ${id}`);
        return this.databaseService.tasksActivities.findMany({
            where: {
                task_id: id
            }
        });
    }
    async update(id, updateActivityDto) {
        return this.databaseService.tasksActivities.update({
            where: {
                id,
            },
            data: updateActivityDto
        });
    }
    remove(id) {
        return this.databaseService.tasksActivities.delete({
            where: { id }
        });
    }
};
exports.ActivitiesService = ActivitiesService;
exports.ActivitiesService = ActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ActivitiesService);
//# sourceMappingURL=activities.service.js.map