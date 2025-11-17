import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Exercise, ExerciseSchema } from "./exercise.schema";
import { Muscle, MuscleSchema } from "src/muscle/muscle.schema";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
      { name: Muscle.name, schema: MuscleSchema },
    ]),
  ],
  controllers: [ExerciseController],
  providers: [ExerciseService],
  exports: [ExerciseService],
})
export class ExerciseModule {}
