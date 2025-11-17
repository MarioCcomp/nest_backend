import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Muscle } from "src/muscle/muscle.schema";

export type ExerciseDocument = HydratedDocument<Exercise>;

@Schema({ collection: 'exercises' })
export class Exercise {

    @Prop({ required: true, unique: true })
    name!: string;

    @Prop({type:String, ref:Muscle.name, required: true })
    targetMuscle!: string;

}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);