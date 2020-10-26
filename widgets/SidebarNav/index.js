

export default function SidebarNav() {


    return (
        <>
            <ul className="list-unstyled navbar__list">
                <li>
                    <a href="/Dashboard">
                        <i className="fas fa-tachometer-alt" />Dashboard</a>
                </li>
                <li>
                    <a href="/Dashboard/Verify">
                        <i className="zmdi zmdi-shield-check animated wobble"></i>Verify</a>
                </li>
                <li>
                    <a href="/Dashboard/Records">
                        <i className="fas fa-table" />Records</a>
                </li>
                <li>
                    <a href="/Dashboard/Submit">
                        <i className="far fa-check-square" />Submit</a>
                </li>
                <hr/>
                <li>
                    <a href="/Dashboard/Messages">
                        <i className="fa fa-inbox" />Messages</a>
                </li>
                <li>
                    <a href="/Dashboard/Notifications">
                        <i className="fa fa-bell" />Notifications</a>
                </li>
                <hr/>
                <li>
                    <a href="/Dashboard/Account">
                        <i className="fa fa-user" />Account</a>
                </li>
                <li>
                    <a href="/Dashboard/Settings">
                        <i className="fa fa-gear" />Settings</a>
                </li>
            </ul>

        </>
    )
}