import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exercise } from "src/exercise/exercise.schema";
import { WorkoutSession, WorkoutSessionSchema } from "src/workout/workout-session/workout-session.schema";


@Schema()
export class WorkoutExercise {

    @Prop({type: String, ref: Exercise.name})
    exercise!: string;

    @Prop()
    plannedSets!: number;

    @Prop({type: [WorkoutSessionSchema]})
    sessions!: WorkoutSession[];
}

export const WorkoutExerciseSchema = SchemaFactory.createForClass(WorkoutExercise);