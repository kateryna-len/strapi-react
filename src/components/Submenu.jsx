import React, { useRef } from 'react';
import { useGlobalContext } from '../Context';
import sublinks from '../data';

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const subMenuContainer = useRef();
  const handleMouseLeave = (event) => {
    const submenu = subMenuContainer.current;
    const { clientX, clientY } = event;
    setPageId(null);
  };
  return (
    <div
      className={currentPage ? ' submenu show-submenu ' : 'submenu'}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
