import useUser from "../../../providers/useUser";


export default function Profile() {

    const { user } = useUser({ redirectTo: "/Account/Login" });

    if (!user || user.isLoggedIn === false) {
        return <>loading...</>;
    }

    return (
        <>
           Welcome
        </>
    )
}