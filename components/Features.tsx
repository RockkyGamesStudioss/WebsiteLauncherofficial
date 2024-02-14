import { MdBolt, MdBuild, MdDone } from 'react-icons/md';
import Feature from "@/components/Feature";
import styles from '../app/page.module.css'
export default function Features() {
    return (
        <div className={styles.features}>
            <Feature
                name="No Crashing"
                icon={<MdBolt />}
                description="no crashing launcher and smooth interface."
            />
            <Feature
                name="Download games easy"
                icon={<MdBuild />}
                description="Easily download and update games from the launcher."
            />
            <Feature
                name="Ease of use"
                icon={<MdDone />}
                description="You click one button and everything happens for you."
            />

        </div>
    )

}
