import { Route, Routes } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import MultiLogin from "./pages/MultiLogin";
import EmailLogin from "./pages/EmailLogin";
import EmailSignUp from "./pages/EmailSignUp";
import MyProfileEdit from "./pages/MyProfileEdit";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Follow from "./pages/Follow";
import SetProfile from "./pages/SetProfile";
import PostDetail from "./pages/PostDetail";
import PostUpload from "./pages/PostUpload";
import ProductUpload from "./pages/ProductUpload";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/multilogin" element={<MultiLogin />} />
        <Route path="/emaillogin" element={<EmailLogin />} />
        <Route path="/emailsignup" element={<EmailSignUp />} />
        <Route path="/myprofileedit" element={<MyProfileEdit />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/:accountname" element={<Profile />} />
        <Route path="/profile/:accountname/following" element={<Follow />} />
        <Route path="/profile/:accountname/follower" element={<Follow />} />
        <Route path="/editprofile" element={<SetProfile />} />
        <Route path="/postdetail/:postkey" element={<PostDetail />} />
        <Route path="/postupload" element={<PostUpload />} />
        <Route path="/productupload" element={<ProductUpload />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
