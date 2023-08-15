export interface DecodedToken {
  iss: string | undefined,
  sub: string | undefined,
  aud: string[] | [] | undefined,
  iat: number | undefined,
  exp: number | undefined,
  azp: string | undefined,
  scope: string | undefined,
  permissions: string[] | [] | undefined
}