import { Body, Controller, Get, Post } from "@nestjs/common";
import { WorkoutRoutineService } from "./workout-routine.service";
import { CreateRoutineDTO } from "./dto/CreateRoutine.dto";


@Controller("/routines")
export class WorkoutRoutineController {

    constructor(private routineService: WorkoutRoutineService) {}

    @Get()
    findAll() {
        return this.routineService.findAll();
    }


    @Post()
    async create(@Body() routine: CreateRoutineDTO) {
        let username: string = "mariojr"
        return await this.routineService.create(routine, username);
    }

}