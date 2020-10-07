import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PageHeader from '../widgets/PageHeader';
import Wave from '../widgets/Wave';

export default function Home() {

  
  return (
    <div>
      <PageHeader />
      <Wave />
    </div>
  )
}
