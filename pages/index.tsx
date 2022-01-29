import { signIn, signOut, useSession } from 'next-auth/react'
import React from "next";

const IndexPage = () => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (session) {
        return (
            <>
                <div>Hello, {session.user?.name}</div>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    } else {
        return (
            <>
                <div>You are not logged in!</div>
                <button onClick={() => signIn()}>Sign In</button>
            </>
        )
    }
}

export default IndexPage;