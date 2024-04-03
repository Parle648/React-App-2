import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class PublicGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
