import useConversation from "../../zustand/useConversation";
import userIcon from "../../assets/images/user.png";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const {
    selectedConversation,
    setSelectedConversation,
    setActiveConversation,
  } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  // console.log(isOnline, onlineUsers);

  const handleSetConversation = () => {
    setSelectedConversation(conversation);
    setActiveConversation(true);
    console.log("Remove Sidebar and Show Conversation container");
  };
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={handleSetConversation}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
            {/* <img src={userIcon} alt="user avatar" /> */}
            {/* <img src="/src/assets/images/consultant.png" alt="user avatar" /> */}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">😦</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// STARTER CODE FOR THIS FILE
// const Conversation = () => {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//             <div className="w-12 rounded-full">
//               <img src="/src/assets/react.svg" alt="user avatar" />
//             </div>
//           </div>
//           <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//               <p className="font-bold text-gray-200">John Doe</p>
//               <span className="text-xl">😦</span>
//             </div>
//           </div>
//         </div>
//         <div className="divider my-0 py-0 h-1"></div>
//       </>
//     );
//   };

//   export default Conversation;
