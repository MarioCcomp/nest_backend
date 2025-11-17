import { Controller } from '@nestjs/common';
import { Get, Body, Post } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDTO } from './dto/CreateExercise.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('exercises')
export class ExerciseController {

    constructor(private exerciseService: ExerciseService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos os exercícios' })
    @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
    findAll() {
        return this.exerciseService.findAll();
    }

    @Post("many")
    @ApiOperation({ summary: 'Cria um ou vários exercícios de uma vez' })
    @ApiResponse({ status: 201, description: 'Exercícios criados com sucesso.' })
    @ApiBody({ type: [CreateExerciseDTO] }) 
    createExercises(@Body() exercises: CreateExerciseDTO[]) {
        return this.exerciseService.createExercises(exercises);
    }



}
