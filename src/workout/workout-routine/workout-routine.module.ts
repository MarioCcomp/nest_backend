import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkoutRoutine, WorkoutRoutineSchema } from './workout-routine.schema';
import { WorkoutExercise, WorkoutExerciseSchema } from '../workout-exercise/workout-exercise.schema';
import { Exercise, ExerciseSchema } from '../../exercise/exercise.schema'; // só se for popular/existir reference
import { WorkoutRoutineController } from './workout-routine.controller';
import { WorkoutRoutineService } from './workout-routine.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkoutRoutine.name, schema: WorkoutRoutineSchema },
      // registra o subdocument schema — útil se quiser usar Model referenciando o subdoc (não obrigatório)
      { name: WorkoutExercise.name, schema: WorkoutExerciseSchema },
      // registra o Exercise schema caso você queira usar populate() para preencher "exercise" (ref)
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
  controllers: [WorkoutRoutineController],
  providers: [WorkoutRoutineService],
  exports: [WorkoutRoutineService], // exporte se outros módulos precisarem usar o service
})
export class WorkoutRoutineModule {}
