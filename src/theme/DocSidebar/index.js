import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  let newProps

  // For the `/guides` sidebar, remove the parent category
  if (props.path.startsWith('/guides'))  {
    newProps = {
      ...props,
      sidebar: props.sidebar[0].items
    }
  }
  // For all other sidebars, pass the default props
  else {
    newProps = props
  }
  return (
    <>
      <DocSidebar data-stuff="testing" {...newProps} />
    </>
  );
}
