import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {LivrosEntity} from "../entities/livros.entity";
import {Model} from "mongoose";
import {CriarLivroDto} from "../dto/criar-livro.dto";
import {v4} from 'uuid';

@Injectable()
export class LivrosService {
  private livros = [];

  constructor(
    @InjectModel(LivrosEntity.name) private readonly livrosModel: Model<LivrosEntity>
  ) {}

  buscarLivros() {
    // return this.livrosModel.find().exec();
    return this.livros;
  }

  async buscar(_id: string) {
    // const livro = await this.livrosModel.findOne({_id}).exec();
    // if(!livro) {
    //   throw new NotFoundException('Livro não encontrado');
    // }
    // return livro;
    return this.livros.find((livro) => livro._id === _id);
  }

  async criar(livroDto: CriarLivroDto) {
    // const livro = new this.livrosModel(livroDto);
    // return livro.save();
    this.livros.push({
      ...livroDto,
      _id: v4(),
    })
  }

  deletar(_id) {
    // return this.livrosModel.deleteOne({_id}).exec();
    this.livros = this.livros.filter(livro => livro._id !== _id);
  }
}
