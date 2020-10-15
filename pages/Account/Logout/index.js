import fetchJson from "../../../providers/fetchJson";
import React from "react";


export default function Logout() {
    async function handleLogin(e) {
        e.preventDefault();


        const body = {
            email: "email",
            password: "password",
        };

        try {
            await mutateUser(
                fetchJson("/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            );
        } catch (error) {
            console.error("An unexpected error happened:", error);
            setErrorMsg(error.data.message);
        }
    }

    return (
        <div onClick={handleLogin}> Goodbye
        </div>
    )
}