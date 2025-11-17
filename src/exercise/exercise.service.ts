import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Exercise, ExerciseDocument } from './exercise.schema';
import { CreateExerciseDTO } from './dto/CreateExercise.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExerciseService {

    constructor(
        @InjectModel(Exercise.name)
        private exerciseModel: Model<ExerciseDocument>) {}

    async findAll() {
        return this.exerciseModel.find().exec();
    }

    async findByName(name: string) {
        return this.exerciseModel.findOne
    }

    async createExercises(data: CreateExerciseDTO[]) {
        return this.exerciseModel.create(data);
    }

}
