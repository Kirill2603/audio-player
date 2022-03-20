import type {NextApiRequest, NextApiResponse} from 'next'
import {socials, SocialsType} from "./data/socials";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<SocialsType>>
) {
    if (req.method === "GET") {
        res.status(200).json(socials)
    }
}
