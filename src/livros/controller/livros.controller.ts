import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {LivrosService} from "../service/livros.service";
import {CriarLivroDto} from "../dto/criar-livro.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('livros')
@Controller('livros')
export class LivrosController {
  constructor(
    private readonly livrosService: LivrosService,
  ) {}

  @Get()
  buscar() {
    return this.livrosService.buscarLivros();
  }

  @Post()
  criar(@Body() dto: CriarLivroDto) {
    return this.livrosService.criar(dto);
  }

  @Get(':id')
  buscarLivro(@Param('id') id: string) {
    return this.livrosService.buscar(id);
  }

  @Delete(':id')
  deletarLivro(@Param('id') id: string) {
    return this.livrosService.deletar(id);
  }
}
