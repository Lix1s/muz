import { AuthDTO, RefreshDTO } from '@internal/dto/dto.auth';
import { CreateUserDTO, LoginUserDTO, UserDTO } from '@internal/dto/dto.user';

import { VerifyEmailDTO } from '@internal/dto/dto.email';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, isObject, IsObject, IsArray, IsOptional } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  SwaggerEmail,
  SwaggerPassword,
  SwaggerToken,
  SwaggerID,
  SwaggerValue,
} from '~/swager/swager.decorators';
import { RoleDTO } from '@internal/dto/dto.role';

export class CreateUser implements CreateUserDTO {
  @SwaggerEmail()
  @IsEmail()
  email: string;
  @SwaggerPassword()
  @IsString()
  password: string;
}

export class VerifyEmail implements VerifyEmailDTO {
  @IsString()
  @SwaggerValue()
  code: string;
}

export class LoginUser implements LoginUserDTO {
  @SwaggerEmail()
  @IsEmail()
  email: string;
  @SwaggerPassword()
  @IsString()
  password: string;
}

export class Refresh implements RefreshDTO {
  @IsString()
  @SwaggerToken()
  refresh: string;
}

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: false })
export class User implements UserDTO {
  @SwaggerID()
  _id: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: Boolean, default: false })
  confirm: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  role: RoleDTO;
}

export const userSchema = SchemaFactory.createForClass(User);

export class Auth implements AuthDTO {
  @ApiProperty({ example: 'access token', description: 'Access token' })
  access: string;
  @ApiProperty({ example: 'refresh token', description: 'Refresh token' })
  refresh: string;
  @ApiProperty({ type: User, description: 'User' })
  user: UserDTO;
}
