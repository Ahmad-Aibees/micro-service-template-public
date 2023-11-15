import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import * as mongoose from "mongoose";

@Schema({ versionKey: false, _id: false })
export class ClientUser extends mongoose.Document {
    @Prop({ required: true, type: Types.ObjectId })
    clientId: Types.ObjectId;

    @Prop({ required: false, type: String })
    token?: string;

    @Prop({ required: false, type: Date })
    lastSeen?: Date;
}

export const ClientUserSchema = SchemaFactory.createForClass(ClientUser);
