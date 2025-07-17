import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SideBar from "./Componenet/SideBarComponent";
import FooterComponent from "./Componenet/FooterComponent";
import Header from "./Componenet/HeaderComponent";
import CreatePost from "./Componenet/CreatePost";
import PostList from "./Componenet/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";
function App() {
  let [selectedTab, SetSelectedTab] = useState("Home");

  const handleOnClick = (selecteValue) => {
    if (selecteValue === "Home") SetSelectedTab("Home");
    else SetSelectedTab("Post");
  };

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} handleOnClick={handleOnClick} />
        <div className="right-part">
          <Header />
          {selectedTab === "Home" && <PostList />}
          {selectedTab === "Post" && <CreatePost />}
          <FooterComponent />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
