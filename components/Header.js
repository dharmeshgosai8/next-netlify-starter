import Head from 'next/head'
function Header() {
    return(
        <div>
        <Head>
            <title>Keywords</title>
            <meta name="description" content="Keywords" />
            <link rel="icon" href="/favicon.png" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;900&display=swap" rel="stylesheet" />
        </Head>
         <header className="pos-rel serp-page">
            <div className="container">
                <h3>Logo</h3>
            </div>
        </header>
        </div>
    )
}
export default Header;