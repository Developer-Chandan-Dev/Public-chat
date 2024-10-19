import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import {extractTime} from '../../utils/extractTime';
import userIcon from '../../assets/images/user.png'

const Message = ({message}) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user" />
          {/* <img src={userIcon} alt="user" /> */}
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-70 text-xs gap-1 flex items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img src="/public/vite.svg" alt="Vite Svg" />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-blue-500`}>
//         Hi! What is upp?
//       </div>
//       <div className="chat-footer opacity-70 text-xs gap-1 flex items-center">
//         12:42
//       </div>
//     </div>
//   );
// };

// export default Message;
