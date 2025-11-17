import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Muscle, MuscleSchema } from "./muscle.schema";
import { MuscleService } from "./muscle.service";
import { MuscleController } from "./muscle.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Muscle.name, schema: MuscleSchema }
    ]),
  ],
  controllers: [MuscleController],
  providers: [MuscleService],
  exports: [MuscleService, MongooseModule],
})
export class MuscleModule {}

