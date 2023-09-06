// Model used to retrieve 'User' claim
export interface JwtClaims
{
    aud: string,
    User: string,
    iat: string,
    jti: string,
    iss: string,
    exp: Number
}