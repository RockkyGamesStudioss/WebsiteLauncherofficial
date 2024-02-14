import styles from './page.module.css'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {


    return (
        <>
            <div className={styles.app}>
                <Navbar
                    name="Tiscord"
                    elements={[
                        
                        { name: 'Youtube', url: 'https://www.youtube.com/@RockkyGamesStudios' },
                        { name: 'X', url: 'https://twitter.com/RockkyGStudio' },
                        { name: 'Instagram', url: 'https://www.instagram.com/rockkygamesstudios/' },
                        { name: 'SmOlix', url: 'https://www.youtube.com/@The_SmOlix' },
                        { name: 'Xtanik', url: 'https://www.youtube.com/@XTANIK_polska' },
                        { name: 'Itch.io', url: 'https://rockkygamesstudioofficial.itch.io ' },
                        { name: 'Gamejolt', url: 'https://gamejolt.com/@SmOlix', }

                    ]}
                />
                <Header description="A fast, launcher."/>
                <section className={styles.bottom}>
                    <h1> Reasons to use RockkyGamesLauncher</h1>
                    <Features/>
                </section>

            </div>
        </>
    )
}
