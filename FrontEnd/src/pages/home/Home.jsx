import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex w-[90%] md:w-auto h-[90vh] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 home_page">
      <Sidebar />
      <MessageContainer/>
    </div>
  );
}

export default Home;
