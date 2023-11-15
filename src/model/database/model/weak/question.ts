import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { DatabaseSchemaHelper } from '../../../../common/helpers/database-schema-helpers';
import { ActorHistoryModel } from '../base/actor-history-schema';

@Schema({ versionKey: false, _id: false })
export class QuestionModel extends ActorHistoryModel {
    @Prop({ required: true, type: String })
    persianLabel: string;

    @Prop({ required: true, type: String })
    fieldType: string;

    @Prop({ required: true, type: Boolean })
    required: boolean;

    @Prop({ required: false, type: String })
    value?: string;
}

const QuestionModelNotFinishedSchema = SchemaFactory.createForClass(QuestionModel);

@Schema({ autoIndex: false })
export class SubQuestionsModel extends mongoose.Document {
    @Prop({ required: true, type: Object })
    conditions: any;

    @Prop({ required: true, type: [QuestionModelNotFinishedSchema] })
    questions: QuestionModel[];
}

export const SubQuestionsSchema = SchemaFactory.createForClass(SubQuestionsModel);

export const QuestionModelSchema = DatabaseSchemaHelper.add(QuestionModelNotFinishedSchema, {
    subQuestions: { required: true, type: [SubQuestionsSchema] }
});
