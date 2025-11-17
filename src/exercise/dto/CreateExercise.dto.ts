import { ApiProperty } from "@nestjs/swagger";
import { Muscle } from "src/muscle/muscle.schema";

export class CreateExerciseDTO {

    @ApiProperty({
        example: "Supino Inclinado",
        description: "Nome do exercício"
    })
    name!: string;

    @ApiProperty({
        example: "Peito",
        description: "Músculo alvo do exercício"
    })
    targetMuscle!: string;
}