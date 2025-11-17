import { Controller, Get, Body, Post } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { CreateMuscleDTO } from './dto/create-muscle.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('muscles')
export class MuscleController {

    constructor(private muscleService: MuscleService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos os músculos' })
    @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
    findAll() {
        return this.muscleService.findAll();
    }


    @Post("many")
    @ApiOperation({ summary: 'Cria um ou vários músculos de uma vez' })
    @ApiResponse({ status: 201, description: 'Músculos criados com sucesso.' })
    @ApiBody({ type: [CreateMuscleDTO] }) 
    createMuscles(@Body() body: CreateMuscleDTO[]) {
        return this.muscleService.createMuscles(body);
    }
}
