import TweetsCol from "../components/TweetsCol/TweetsCol";
import VideoCol from "../components/VideoCol/VideoCol";
import SidebarMenu from "../components/SidebarMenu";

export default function Home() {
  return (
    <div className="flex flex-row h-screen overflow-auto">
      <SidebarMenu />
      <VideoCol />
      <TweetsCol />
    </div>
  );
}
