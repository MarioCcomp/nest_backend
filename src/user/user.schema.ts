import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, StringExpressionOperatorReturningBoolean } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {

    @Prop({ required: true, unique: true })
    username!: string;

    @Prop({ required: true })
    nickname!: string;

    @Prop({ required: true, unique: true })
    email!: string;

    @Prop({ required: true })
    password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);