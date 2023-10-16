import React, { useState, createContext, useCallback } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [sidebarToggleState, setSidebarToggleState] = useState(false);
  const body = document.body;
  // for toggling the sidebar
  const showSidebar = () => {
    setSidebarToggleState(!sidebarToggleState);
  };
  const hideSidebar = () => {
    setSidebarToggleState(false);
  };

  // for adding active class on navbar--------
  const [activeLink, setActiveLink] = useState(null);
  const handleActiveNavbar = (activedLink) => {
    setActiveLink(activedLink);
  };
  const links = [
    {
      id: "discussion",
      route: "/feed",
      label: "Discussions"
    },
    {
      id: "clubs",
      route: "/clubs",
      label: "Clubs"
    }
  ];
  // for displaying create post box-----------
  const [showCreatePostComponent, setShowCreatePostComponent] = useState(false);
  const displayCreatePostComponent = useCallback(() => {
    setShowCreatePostComponent(!showCreatePostComponent);
  });
  const hideCreatePostComponent = useCallback(() => {
    setShowCreatePostComponent(false);
  });
  // INCREASING LIKES COUNT---------------------
  const [likesCount, setLikesCount] = useState(0);

  const handleLikesCount = useCallback(() => {
    setLikesCount((prevLikesCount) => prevLikesCount + 1);
  }, []);

  const contextValue = {
    showSidebar: showSidebar,
    hideSidebar: hideSidebar,
    sidebarToggleState: sidebarToggleState,
    links: links,
    activeLink: activeLink,
    handleActiveNavbar: handleActiveNavbar,
    showCreatePostComponent: showCreatePostComponent,
    displayCreatePostComponent: displayCreatePostComponent,
    hideCreatePostComponent: hideCreatePostComponent,
    likesCount: likesCount,
    handleLikesCount: handleLikesCount
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
