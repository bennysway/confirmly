

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
                        <i class="zmdi zmdi-shield-check animated wobble"></i>Verify</a>
                </li>
                <li>
                    <a href="/Dashboard/Records">
                        <i className="fas fa-table" />Records</a>
                </li>
                <li>
                    <a href="/Dashboard/Submit">
                        <i className="far fa-check-square" />Submit</a>
                </li>
            </ul>

        </>
    )
}