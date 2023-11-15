import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { BaseModel } from './base/base';
import * as mongoose from 'mongoose';

export const DownloadUrlDB = 'DownloadUrl';

@Schema({ versionKey: false, collection: 'download-url' })
export class DownloadUrlModel extends BaseModel {
    @Prop({ required: true, type: Types.ObjectId })
    fileId: Types.ObjectId;

    @Prop({ required: true, type: String })
    url: string;

    @Prop({ required: true, type: Date })
    expireDate: Date;
}

export const DownloadUrlSchema: mongoose.Schema = SchemaFactory.createForClass(DownloadUrlModel);

DownloadUrlSchema.pre('save', function () {
    this.set(this.isNew ? 'created' : 'updated', new Date());
});
