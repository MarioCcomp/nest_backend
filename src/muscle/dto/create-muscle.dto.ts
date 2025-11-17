import { ApiProperty } from "@nestjs/swagger";

export class CreateMuscleDTO {
    @ApiProperty({
            example: "Peito",
            description: "Nome do músculo"
        })
    name!: string;
}