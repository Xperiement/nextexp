import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legion Platforms</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section class="hero">
          <div className="wrapper">
            <div className="lCont">
              <div className="title">Experiences that matter.</div>
              <div className="subTitle">
                We are building next generation of web/mobile technology
              </div>
              <div className="heroBtnSet">
                <button className="heroBtn">Explore</button>
                <button className="heroBtn">Contact</button>
              </div>
            </div>
            <div className="rCont"></div>
          </div>
        </section>
      </main>
    </>
  );
}
