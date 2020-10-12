import Head from 'next/head'
import useScript from '../../hooks/useScript'


export default function Dashboard() {

    useScript("https://code.jquery.com/jquery-3.5.1.slim.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js")
    useScript("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-progressbar/0.9.0/bootstrap-progressbar.min.js")

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Dashboard for Confirmly" />
                <meta name="author" content="BennySway" />
                <meta name="keywords" content="Verification id verify"></meta>
            </Head>
        Place holder for Dashboard
        </>
    )
}