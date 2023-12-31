import { SetMetadata } from '@nestjs/common';
import { RoleType } from '../../../../common/types/role-type';
import { systemServiceRoleType } from '../../../../common/types/system-service-role.type';

export const ROLE = 'role';
/**
 * Marks the API to need some kind of permissions
 * @constructor
 * @param options
 */
export const Role = (options: systemServiceRoleType[]) => SetMetadata(ROLE, options ?? []);
