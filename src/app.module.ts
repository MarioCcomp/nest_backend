import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseController } from './exercise/exercise.controller';
import { ExerciseService } from './exercise/exercise.service';
import { MuscleController } from './muscle/muscle.controller';
import { MuscleService } from './muscle/muscle.service';
import { ExerciseModule } from './exercise/exercise.module';
import { MuscleModule } from './muscle/muscle.module';
import { WorkoutRoutineModule } from './workout/workout-routine/workout-routine.module';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/gymnotes'),
    ExerciseModule,
    MuscleModule,
    WorkoutRoutineModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
