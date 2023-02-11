import jwtDecode from 'jwt-decode';

export function getPropDecoded(toDecode: string, prop: string) {
  const decoded: any = jwtDecode(toDecode?.toString());
  return decoded[prop];
}
