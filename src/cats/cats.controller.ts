import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpStatus,
  // Header,
  // HttpCode,
  Param,
  Post,
  Put,
  // Query,
  // Res,
  // Redirect,
  // Req,
} from '@nestjs/common';
// import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
// import { Response } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // @Post('create2')
  // create2(@Res() res: Response) {
  //   console.log(res);
  //   res.status(HttpStatus.CREATED).send();
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get('findAll2')
  // findAll2(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  // }

  // @Get('findAll3')
  // findAll3(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  //   return [];
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
  // @Post()
  // //We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.
  // // @HttpCode(204)
  // // @Header('Cache-Control', 'none')
  // async create(@Body() createCatDto: CreateCatDto) {
  //   console.log(createCatDto);
  //   return 'This action adds a new cat';
  // }

  // @Get()
  // // @Redirect() takes two arguments, url and statusCode, both are optional. The default value of statusCode is 302 (Found) if omitted.
  // // Returned values will override any arguments passed to the @Redirect() decorator.
  // // @Redirect('https://nestjs.com', 301)
  // // getDocs(@Query('version') version: string) {
  // //   if (version && version === '5') {
  // //     return { url: 'https://docs.nestjs.com/v5/' };
  // //   }
  // // }
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }
  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }
  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }

  // @Get('ab*cd')
  // findAllWildcard() {
  //   //The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on.
  //   //The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts.
  //   //The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
  //   //WARNING
  //   //A wildcard in the middle of the route is only supported by express.
  //   return 'This route uses a wildcard';
  // }

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }
}
