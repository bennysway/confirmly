import useUser from '../providers/useUser'
import PageHeader from '../widgets/PageHeader'
import Wave from '../widgets/Wave'

export default function Home() {

  const { user } = useUser({});
  if (!user || user.isLoggedIn === false) {
    const currentUser = { isLoggedIn: false }
    return (
      <div>
        <PageHeader user={currentUser} />
        <div>{currentUser.isLoggedIn ? "Ys" : "No"}</div>
        <Wave />
      </div>
    )

  } else {
    return (
      <div>
        <PageHeader user={user} />
        <div>{user.isLoggedIn ? "Ys" : "No"}</div>
        <Wave />
      </div>
    )
  }
}
