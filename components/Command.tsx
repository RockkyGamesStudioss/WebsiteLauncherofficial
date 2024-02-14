import { MdContentCopy} from "react-icons/md";
import styles from '../app/page.module.css'
import Router from "next/router";
export default function Command({text}: {text: string}) {


    return (
        <button className={styles.command} onClick={() => {
            Router.push('')
        }}>
            Download
        </button>
    )
}
