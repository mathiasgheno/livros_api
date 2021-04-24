import { Module } from '@nestjs/common';
import { LivrosController } from './controller/livros.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {LivrosEntity, LivrosSchema} from "./entities/livros.entity";
import { LivrosService } from './service/livros.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LivrosEntity.name,
        schema: LivrosSchema,
      },
    ])
  ],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}
