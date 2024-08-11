import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { RouterProvider } from "react-router-dom";
import WatchParty from "./components/WatchParty";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchParty />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>

        {/* 
    header
    sidebar
      menuList
    body
      maincontainer
        btnlist
        videoContainer
         videoCards
    
    
    */}
      </div>
    </Provider>
  );
}

export default App;
