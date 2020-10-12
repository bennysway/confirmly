import useUser from '../providers/useUser'
import PageFooter from '../widgets/PageFooter';
import PageHeader from '../widgets/PageHeader'
import Wave from '../widgets/Wave'
import WidePictureSlide from '../widgets/WidePictureSlide';

export default function Home() {

  const { user } = useUser({});
  if (!user || user.isLoggedIn === false) {
    const currentUser = { isLoggedIn: false }
    return (
      <div>
        <PageHeader user={currentUser} />
        {/*<WidePictureSlide />*/}
        <Wave />
        <PageFooter />
      </div>
    )

  } else {
    return (
      <div>
        <PageHeader user={user} />
        {/*<WidePictureSlide />*/}
        <Wave />
        <PageFooter />
      </div>
    )
  }
}
