import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsOptional, IsString, IsUrl, IsNumber } from 'class-validator';

export class CreateHistoriaDto {
  @ApiProperty() @IsDateString() fecha!: string;
  @ApiProperty() @IsString() evento!: string;

  @ApiProperty({ required: false, type: [String] })
  @IsArray() @IsOptional()
  imagenes?: string[]; // URLs ya subidas (pre-signed URL flow)

  @ApiProperty({ required: false }) @IsOptional() @IsString()
  detalles?: string;

  @ApiProperty({ required: false }) @IsOptional() @IsString()
  usuario_id?: string;

  @ApiProperty({ required: false, type: Object, example: { peso: 12.3, observaciones: 'OK' } })
  @IsOptional()
  meta?: { peso?: number; observaciones?: string };
}
