import { IsInt ,IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {
	// ? isint,isPositive , min 1
    
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // ? isStringm, min 1
    @IsString()
    @MinLength(1)
	name: string;
}
