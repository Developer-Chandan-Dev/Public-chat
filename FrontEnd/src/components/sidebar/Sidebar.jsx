import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../../context/AuthContext";

import SearchInput from "./SearchInput";
import useConversation from "../../zustand/useConversation";
function Sidebar() {
  const { authUser } = useAuthContext();
  const { activeConversation } = useConversation();

  return (
    <div
      className={`border-r w-full md:w-auto border-slate-500 p-4 sidebar ${
        activeConversation === true ? "hidden" : "flex"
      } md:flex flex-col relative`}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="absolute bottom-0 flex items-center gap-x-10 pb-4">
        <LogoutButton />
        <span className="text-white">Logged In as : {authUser.fullName}</span>
      </div>
      {/* <LogoutButton /> */}
    </div>
  );
}

export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";

// import SearchInput from "./SearchInput";
// function Sidebar() {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton/>
//     </div>
//   );
// }

// export default Sidebar;
