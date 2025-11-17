import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ExerciseSet, ExerciseSetSchema } from "src/workout/exercise-set/exercise-set.schema";


@Schema()
export class WorkoutSession {

    @Prop()
    date!: Date;

    @Prop({type: [ExerciseSetSchema]})
    sets!: ExerciseSet[];

}

export const WorkoutSessionSchema = SchemaFactory.createForClass(WorkoutSession);