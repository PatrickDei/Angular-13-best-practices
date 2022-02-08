export class HttpToolsService {
  static buildURI(...args: string[]): string {
    return args.join('/');
  }
}
