import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  //We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  // @Redirect() takes two arguments, url and statusCode, both are optional. The default value of statusCode is 302 (Found) if omitted.
  // Returned values will override any arguments passed to the @Redirect() decorator.
  // @Redirect('https://nestjs.com', 301)
  // getDocs(@Query('version') version: string) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
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
