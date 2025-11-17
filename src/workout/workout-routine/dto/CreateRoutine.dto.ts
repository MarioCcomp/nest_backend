import { WorkoutExerciseDTO } from "src/workout/workout-exercise/dto/workout-exercise.dto";
import { WorkoutExercise } from "src/workout/workout-exercise/workout-exercise.schema";

export class CreateRoutineDTO {
    name!: string;
    exercises!: WorkoutExercise[];
}