import * as React from "react";
import styles from "./main.scss";

export class MainView extends React.Component<{}, {}> {

    render(): React.ReactNode {
        return <div className={styles.root}>
            <div className={styles.message}>Hello from GROm!</div>
            <a href={"http://grom-games.com"} target={"_blank"}>Check my other projects!</a>
        </div>;
    }
}