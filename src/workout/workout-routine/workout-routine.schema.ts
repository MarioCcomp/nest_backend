import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { WorkoutExercise, WorkoutExerciseSchema } from "src/workout/workout-exercise/workout-exercise.schema";

export type WorkoutRoutineDocument = HydratedDocument<WorkoutRoutine>;

@Schema({collection: "workoutRoutines"})
export class WorkoutRoutine {

    @Prop()
    name!: string;

    @Prop({type: [WorkoutExerciseSchema]})
    exercises!: WorkoutExercise[];

    @Prop()
    ownerUsername!: string;
}

export const WorkoutRoutineSchema = SchemaFactory.createForClass(WorkoutRoutine);