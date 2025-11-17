import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MuscleDocument } from './muscle.schema';
import { Model } from 'mongoose';
import { Muscle } from './muscle.schema';
import { CreateMuscleDTO } from './dto/create-muscle.dto';

@Injectable()
export class MuscleService {

    constructor(
        @InjectModel(Muscle.name)
        private muscleModel: Model<MuscleDocument>
    ) {}

    async createMuscle(data: CreateMuscleDTO) {
        const created = new this.muscleModel(data);
        return created.save();
    }

    async findAll() {
        return this.muscleModel.find().exec();
    }

    async createMuscles(data: CreateMuscleDTO[]) {
        return this.muscleModel.create(data);
    }
}
