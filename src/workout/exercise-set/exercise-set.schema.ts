import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class ExerciseSet {
    @Prop({ required: true })
    weight!: number;

    @Prop({ required: true })
    reps!: number;

    @Prop()
    rir!: number;

    @Prop()
    notes!: string;
}

export const ExerciseSetSchema = SchemaFactory.createForClass(ExerciseSet);