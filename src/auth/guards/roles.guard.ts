import {Injectable, CanActivate, ExecutionContext, ForbiddenException} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        'roles',
        [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || !user.rol) {
        throw new ForbiddenException(
            'Permiso denegado: rol no encontrado',
        );
        }

        if (!requiredRoles.includes(user.rol)) {
        throw new ForbiddenException(
            'Permiso denegado: solo administradores pueden realizar esta acción',
        );
        }

        return true;
    }
}
