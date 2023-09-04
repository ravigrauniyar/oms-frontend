import jwtDecode from "jwt-decode";
import { JwtClaims } from "../models/JwtClaims";
import { PersonView } from "../models/PersonView";

class ClaimHandler
{
    static getUser(token:string)
    {
        // Use jwt-decode to deserialize the token string
        const tokenJson: JwtClaims = jwtDecode(token)

        // Retrieve the User object
        const user: PersonView = JSON.parse(tokenJson.User)
        return user
    }
    static getExpireTime(token:string)
    {
        // Use jwt-decode to deserialize the token string
        const tokenJson: JwtClaims = jwtDecode(token)

        // Retrieve the User object
        const expireTime: Number = tokenJson.exp
        return expireTime
    }
}
export default ClaimHandler