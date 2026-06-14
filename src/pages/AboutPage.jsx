function AboutPage() {
    return (
        <main className="page about-page">
            <section className="about-card">
                <h1>About Luminary</h1>
                <br/>
                <br/>

                <p>
                    Luminary is a mood and memory journal where very entry becomes 
                    a living star in your night sky.
                </p>
                

                <h2>How it works</h2>
                <p>
                    You write a memory like you would in a regular journal.<br />
                    Luminary plants it as a star.<br />
                    <em>The color of the star reflects the feeling inside the memory.</em>
                </p>
            

                <h2>Privacy</h2>
                <p>
                    Don't worry, your memories never leave your device. <br />
                    We use local storage to keep your data safe and private.
                </p>
                <br/>


                <h2>Coming Soon</h2>
                <p>
                    Future version may include:
                    <ul>
                        <li>AI emotion detection</li>
                        <li>Constellations</li>
                        <li>Memory Themes</li>
                        <li>Seasonal Skies</li>
                        <li>Beautiful exportable sky snapshots</li>
                        <li>And more...</li>
                    </ul>

                </p>

            </section>
        </main>
    )
}

export default AboutPage;