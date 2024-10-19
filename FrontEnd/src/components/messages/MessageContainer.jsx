import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {
    selectedConversation,
    setSelectedConversation,
    activeConversation,
    setActiveConversation,
  } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleBack = () => {
    setActiveConversation(false);
  };

  return (
    <div
      className={`w-full ${
        activeConversation === true ? "flex" : "hidden"
      } md:min-w-[450px] lg:min-w-[600px] md:flex flex-col messageContainer`}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header start here */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={14}
              fill="white"
              className="cursor-pointer block md:hidden"
              onClick={handleBack}
            >
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
            <div className="w-8 h-8 rounded-full object-fill overflow-hidden border">
              <img src={selectedConversation.profilePic} alt="" />
            </div>
            <span className="text-white font-bold text-sm">
              {selectedConversation.fullName}
            </span>
          </div>
          {/* Header end here */}

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  const { setActiveConversation } = useConversation();

  const handleShowSidebar = ()=>{
    setActiveConversation(false);
  }
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="md:hidden w-10 h-10 rounded-full absolute top-2 left-2 border flex items-center justify-center hover:bg-slate-600 cursor-pointer" onClick={handleShowSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="white"
          width={14}
        >
          <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
        </svg>
      </div>
      <div className="px4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// STARTER CODE
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";

// const MessageContainer = () => {
//   return <div className="md:min-w-[450px] flex flex-col">
//     <>
//     {/* Header start here */}
//     <div className="bg-slate-500 px-4 py-2 mb-2">
//         <span className="label-text">To:</span><span className="text-gray-900 font-bold">John De</span>
//     </div>
//     {/* Header end here */}

//     <Messages/>
//     <MessageInput/>
//     </>
//   </div>;
// };

// export default MessageContainer;
