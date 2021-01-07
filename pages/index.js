import {NextPage} from "next";
import Game from "../components/Game";

export default function Home({ allPostsData }){
    return(
        <Layout home>
            <Head>
            <title>{siteTitle}</title>
            </Head>
            <section className = {utilStyles.headingMd}>
                <p>
                    Hello, I
                </p>
            </section>
        </Layout>
    )
}