"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cors_middlewares_1 = require("./middlewares/cors.middlewares");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const port = 3001;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
    app.use(cors_middlewares_1.CorsMiddleware);
    logger.log(`application started at port: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map