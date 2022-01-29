import { NextApiHandler } from 'next'
import { getSession } from 'next-auth/react'

const secretClubHandler: NextApiHandler = async (req, res) => {
    const session = await getSession({ req })

    if (session) {
        res.end(`Welcome, ${session.user?.name}`)
    } else {
        res.statusCode = 403
        res.end("You are not allowed here!")
    }
}

export default secretClubHandler