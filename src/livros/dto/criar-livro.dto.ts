import { IsString, IsNotEmpty } from 'class-validator'
import {ApiProperty} from "@nestjs/swagger";

export class CriarLivroDto {
  @ApiProperty() @IsString() @IsNotEmpty() nome: string;
  @ApiProperty() @IsString() @IsNotEmpty() serie: string;
  @ApiProperty() @IsString() @IsNotEmpty() paginas: string;
  @ApiProperty() @IsString() @IsNotEmpty() descricao: string;
  @ApiProperty() @IsString() @IsNotEmpty() imagem: string;
}