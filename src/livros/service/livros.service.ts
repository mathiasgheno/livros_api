import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {LivrosEntity} from "../entities/livros.entity";
import {Model} from "mongoose";
import {CriarLivroDto} from "../dto/criar-livro.dto";

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(LivrosEntity.name) private readonly livrosModel: Model<LivrosEntity>
  ) {}

  buscarLivros() {
    return this.livrosModel.find({}, {
      _id: true,
      nome: true,
    }).exec();
  }

  async buscar(_id: string) {
    const livro = await this.livrosModel.findOne({_id}).exec();
    if(!livro) {
      throw new NotFoundException('Livro não encontrado');
    }
    return livro;
  }

  async criar(livroDto: CriarLivroDto) {
    const livro = new this.livrosModel(livroDto);
    return livro.save();
  }

  deletar(_id) {
    return this.livrosModel.deleteOne({_id}).exec();
  }
}
