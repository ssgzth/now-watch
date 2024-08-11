import React, { useEffect } from "react";
import BtnList from "./BtnList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import { setVideos } from "../utils/videoSlice";
import { YT_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const btn = useSelector((store) => store.menu.menubtn);

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className={`${btn ? "col-span-10" : "col-span-12"}`}>
      <BtnList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
