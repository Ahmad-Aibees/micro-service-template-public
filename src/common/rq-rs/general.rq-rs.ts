import {ApiProperty} from "@nestjs/swagger";
import {Validator} from "../validator/validator";
import {RoleType, RoleTypesList} from "../types/role-type";

export class ApiGeneralStatusRq {
    @ApiProperty({ description: 'status' })
    @Validator({ title: 'status', required: true, type: 'boolean' })
    active: boolean;
}

export class ApiUpdatedIdRs {
    @ApiProperty({ required: false, description: 'id' })
    id: string;
}

// DELETE
export class ApiGeneralDeleteRs {
    @ApiProperty({ required: false, description: 'id' })
    id: string;
}

// EXPORT FILE
export class ApiGeneralExportFileRs {
    @ApiProperty({ required: false, description: "file's name" })
    name: string;

    @ApiProperty({ required: false, description: "file's type" })
    mime: string;

    @ApiProperty({ required: false, description: "file's content" })
    content: string;
}

export class ApiUpdateRq {
    @ApiProperty()
    @Validator({ title: 'actorId', required: true, check: { objectId: true } })
    actorId: string;

    @ApiProperty()
    @Validator({ title: 'actorType', required: true, check: { in: RoleTypesList } })
    actorType: RoleType;
}
