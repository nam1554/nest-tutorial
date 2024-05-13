import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  //We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.
  // @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAllWildcard() {
    //The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on.
    //The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts.
    //The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
    //WARNING
    //A wildcard in the middle of the route is only supported by express.
    return 'This route uses a wildcard';
  }
}
