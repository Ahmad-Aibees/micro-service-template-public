import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { FileExtensionsType, FileExtensionsTypeList } from '../../../../common/types/file-extensions-type';
import { QuestionModel, QuestionModelSchema } from './question';
import { ActorHistoryModel } from '../base/actor-history-schema';

@Schema({ versionKey: false, _id: false })
export class FileActionModel extends ActorHistoryModel {
    @Prop({ required: true, type: String })
    fileType: string;

    @Prop({ required: false, type: Types.ObjectId })
    fileId: Types.ObjectId;

    @Prop({ required: true, type: Array, enum: FileExtensionsTypeList })
    acceptedExtensions: FileExtensionsType[];

    @Prop({ required: true, type: String })
    extension: string;
}

export const fileActionSchema = SchemaFactory.createForClass(FileActionModel);

@Schema({ autoIndex: false })
export class FormSubmissionAction extends ActorHistoryModel {
    @Prop({ required: true, type: [QuestionModelSchema] })
    questions: QuestionModel[];
}



