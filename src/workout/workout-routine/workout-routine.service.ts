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

    async update(id: string, routine: WorkoutRoutine) {

    }

    async deleteRoutine(routineId: string) {
        return await this.routineModel.findByIdAndDelete(routineId);
    }

    async updateName(routineId: string, name: string) {
        const routine: WorkoutRoutineDocument | null = await this.routineModel.findById(routineId);
        if(routine !== null) {
            routine.name = name;
            return await routine.save();
        }
    }

    async findByOwnerUsername(username: string) {
        return await this.routineModel.find({ownerUsername: username});
    }

    async updatePlannedSets(routineId: string, execiseId: string, newPlannedSets: number) {  // TENHO Q TESTAR SE ISSO TA CERTO
        const routine = this.routineModel.findById(routineId);

        this.routineModel.updateOne({
            _id: routineId,
            "exercises._id": execiseId
        },
        {
            $set: {
                "exercises.$.plannedSets": newPlannedSets
            }
        }
    );
    }



}