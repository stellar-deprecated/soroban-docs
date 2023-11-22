import React, {useState} from 'react';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import styles from './styles.module.css';
export default function DocPageLayout({children}) {
  const sidebar = useDocsSidebar();
  // console.log('DocPage/Layout sidebar', sidebar)
  const isGuidesPage = sidebar && 'name' in sidebar && sidebar.name === 'guidesSidebar'
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(isGuidesPage);
  // console.log('DocPage/Layout children', children)
  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docPage}>
        {sidebar && !isGuidesPage && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
      </div>
    </Layout>
  );
}
