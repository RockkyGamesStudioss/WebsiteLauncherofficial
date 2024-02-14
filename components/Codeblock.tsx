'use client';


import styles from '../app/page.module.css'
import hljs from "highlight.js";
import { Roboto_Mono} from 'next/font/google';
import {MdContentCopy} from "react-icons/md";

const roboto = Roboto_Mono({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"]
})

export default function Codeblock() {


    let code: string = `All updates, patches and quick \n downloads in one place only in \n RockkyGamesLauncher`;


    code = hljs.highlight("javascript", code).value;


    return (

        <pre className={styles.hljs_bg}>
            <code className={`language-javascript ${roboto.className}`} dangerouslySetInnerHTML={{__html: code}} style={{position: "relative"}}>
            </code>
        </pre>
    );
}
