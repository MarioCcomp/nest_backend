import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { WorkoutRoutineService } from "./workout-routine.service";
import { CreateRoutineDTO } from "./dto/CreateRoutine.dto";
import { WorkoutRoutine } from "./workout-routine.schema";


@Controller()
export class WorkoutRoutineController {

    constructor(private routineService: WorkoutRoutineService) {}

    @Get("/routines")
    findAll() {
        return this.routineService.findAll();
    }


    @Post("/routine")
    async create(@Body() routine: CreateRoutineDTO) {
        let username: string = "mariojr"
        return await this.routineService.create(routine, username);
    }

    @Put("/routine/:id")
    update(id: string, routine: WorkoutRoutine) {
        return this.routineService.update(id, routine);
    }



}