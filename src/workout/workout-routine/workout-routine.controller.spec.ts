import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutRoutineController } from './workout-routine.controller';

describe('Controller', () => {
  let controller: WorkoutRoutineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutRoutineController],
    }).compile();

    controller = module.get<WorkoutRoutineController>(WorkoutRoutineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
