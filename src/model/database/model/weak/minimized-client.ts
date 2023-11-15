import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MultiLanguageLabelSchema, MultiTranslationLabel } from './multi-translation-label';
import { Types } from 'mongoose';
import * as mongoose from "mongoose";

@Schema({ versionKey: false, _id: false })
export class MinimizedClient extends mongoose.Document {
    @Prop({ required: true, type: Types.ObjectId })
    clientId: Types.ObjectId;

    @Prop({ required: true, type: MultiLanguageLabelSchema })
    name: MultiTranslationLabel;
}

export const MinimizedClientSchema = SchemaFactory.createForClass(MinimizedClient);
