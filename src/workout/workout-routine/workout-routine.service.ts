import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { WorkoutRoutine, WorkoutRoutineDocument } from "./workout-routine.schema";
import { InjectModel } from "@nestjs/mongoose";
import { CreateRoutineDTO } from "./dto/CreateRoutine.dto";


@Injectable()
export class WorkoutRoutineService {

    constructor(
        @InjectModel(WorkoutRoutine.name)
        private routineModel: Model<WorkoutRoutineDocument>) {}

    async findAll() {
        return await this.routineModel.find().exec();
    }

    async create(data: CreateRoutineDTO, username: string) {

        const routineCreated = {
            ...data,
            ownerUsername: username
        };

         try {
        const result = await this.routineModel.create(routineCreated);
        console.log("Mongoose salvou:", result);
        return result;
    } catch (err) {
        console.error("Erro ao salvar:", err);
        throw err;
    }

    }


}