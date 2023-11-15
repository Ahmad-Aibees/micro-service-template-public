import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false, _id: false })
export class PersonalPicture extends mongoose.Document {
    @Prop({ required: true, type: Types.ObjectId })
    fileId: Types.ObjectId;

    @Prop({ required: true, types: String })
    url: string;
}

export const PersonalPictureSchema = SchemaFactory.createForClass(PersonalPicture);
