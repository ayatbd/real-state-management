import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="w-full h-[120px] bg-white flex items-center justify-end">
      <div className="flex items-center gap-9">
        <IoMdNotificationsOutline size={28} />
        <div className="flex items-center gap-3.5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
