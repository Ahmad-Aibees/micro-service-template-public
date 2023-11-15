import { Prop, Schema } from '@nestjs/mongoose';
import { ActionTypesList, ActionTypeType } from '../../../../common/types/action-type-type';
import { ActorHistoryModel } from '../base/actor-history-schema';
import { FileActionModel, FormSubmissionAction } from './ation-requested-info';

@Schema({ versionKey: false, _id: false })
export class ActionModel extends ActorHistoryModel {
    @Prop({ required: true, type: String, enum: ActionTypesList })
    type: ActionTypeType;

    @Prop({ required: true, type: [Object] })
    requiredInfo: FormSubmissionAction | FileActionModel;

    @Prop({ required: true, type: Boolean })
    fulfilled: boolean;
}
