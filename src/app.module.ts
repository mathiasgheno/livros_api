import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
    LivrosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
