import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MultiLanguageLabelSchema, MultiTranslationLabel } from './multi-translation-label';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ versionKey: false, _id: false })
export class MinimizedAgency extends mongoose.Document {
    @Prop({ required: true, type: Types.ObjectId })
    agencyId: Types.ObjectId;

    @Prop({ required: true, type: MultiLanguageLabelSchema })
    name: MultiTranslationLabel;
}

export const MinimizedAgencySchema = SchemaFactory.createForClass(MinimizedAgency);
