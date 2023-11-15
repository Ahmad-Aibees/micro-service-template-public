import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ versionKey: false, _id: false })
export class ActorPersonalInfo extends mongoose.Document {
    @Prop({ type: String })
    firstName: string;

    @Prop({ type: String })
    lastName: string;

    @Prop({ type: String })
    phoneNumber: string;

    @Prop({ type: String })
    nationalCode: string;

    @Prop({ type: Date })
    birthday: Date;

    @Prop({ required: true, type: Object })
    customFields: any;
}

export const ActorPersonalInfoSchema = SchemaFactory.createForClass(ActorPersonalInfo);
