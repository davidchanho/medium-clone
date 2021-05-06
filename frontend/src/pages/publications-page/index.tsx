import React, { lazy } from "react";
import Button from "../../components/button";
import Row from "../../components/row";
import styles from "./index.module.scss";

const PublicationList = lazy(() => import("./components/publication-list"));

function PublicationsPage() {
  return (
    <div>
      <section className={styles.section}>
        <Row>
          <h2 className={styles.title}>Publications</h2>
          <Button>New publication</Button>
        </Row>
        <h3 className={styles.subtitle}>Suggested</h3>

        <hr />

        <PublicationList />
      </section>
    </div>
  );
}

export default PublicationsPage;
