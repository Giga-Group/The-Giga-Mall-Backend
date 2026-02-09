import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class ApplyJobDto {
  @IsString()
  @IsNotEmpty()
  highestQualification: string;

  @IsString()
  @IsNotEmpty()
  candidateName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phoneNo?: string;

  @IsString()
  @IsOptional()
  linkedIn?: string;

  @IsString()
  @IsOptional()
  lastCompany?: string;

  @IsString()
  @IsOptional()
  lastPosition?: string;

  @IsString()
  @IsNotEmpty()
  resume: string; // File path
}
