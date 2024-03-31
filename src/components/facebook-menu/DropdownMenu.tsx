import MenuItem from "./MenuItem";
import Settings from "@/assets/menu-icons/settings.svg";
import Moon from "@/assets/menu-icons/moon.svg";
import NeedHelp from "@/assets/menu-icons/question.svg";
import Feedback from "@/assets/menu-icons/feedback.svg";
import Logout from "@/assets/menu-icons/logout.svg";
import Arrow from "@/assets/menu-icons/arrow.svg";
import Language from "@/assets/menu-icons/language.svg";
import PrivacyCenter from "@/assets/menu-icons/privacy.svg";
import PrivacyCheckup from "@/assets/menu-icons/lock.svg";
import Feed from "@/assets/menu-icons/feed.svg";
import ActivityLog from "@/assets/menu-icons/activity_log.svg";
import Report from "@/assets/menu-icons/report.svg";
import Email from "@/assets/menu-icons/email.svg";
import { MotionConfig } from "framer-motion";
import ResizeDropdown from "./ResizeDropdown";
import { useState } from "react";
const DropdownMenu = ({
  openDropdown,
  selectedMenu,
  setSelectedMenu,
}: {
  openDropdown: boolean;
  setOpenDropdown: Function;
  selectedMenu: string;
  setSelectedMenu: Function;
}) => {
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const [slideDirection, setslideDirection] = useState<
    "forword" | "backword"|null
  >(null);

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      {openDropdown && (
        <div
          className={`absolute w-96  bg-[#242526] rounded-xl top-11 px-3 pt-5 pb-2 `}>
          <ResizeDropdown slideDirection={slideDirection}>
            {selectedMenu === "initialMenu" && (
              <>
                <MenuItem
                  onClick={() => {
                    setSelectedMenu("settings");
                    setCurrentOption("Settings & privacy");
                    setslideDirection('forword')
                  }}
                  icon={Settings}
                  title="Settings & privacy"
                  hasSubMenu
                />
                <MenuItem
                  onClick={() => {
                    setSelectedMenu("help-support");
                    setCurrentOption("Help & Support");
                    setslideDirection('forword')
                  }}
                  icon={NeedHelp}
                  title="Help & Support"
                  hasSubMenu
                />
                <MenuItem
                  icon={Moon}
                  title="Display & accessibility"
                  hasSubMenu
                />
                <MenuItem icon={Feedback} title="Give feedback" />
                <MenuItem icon={Logout} title="Log Out" />
              </>
            )}
            {selectedMenu === "settings" && (
              <>
                <div className="pb-3 px-2 text-[#E7E9ED] flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedMenu("initialMenu");
                      setCurrentOption(null);
                      setslideDirection('backword')
                    }}
                    className="size-10 hover:bg-[#4E4F50] flex justify-center duration-300 items-center rounded-full">
                    <Arrow className=" size-5" />
                  </button>
                  <span className="text-xl">{currentOption}</span>
                </div>
                <MenuItem icon={Settings} title="Settings" />
                <MenuItem
                  onClick={() => {
                    setSelectedMenu("language");
                    setCurrentOption("Language");
                    setslideDirection('forword')
                  }}
                  icon={Language}
                  title="Language"
                  hasSubMenu
                />
                <MenuItem icon={PrivacyCheckup} title="Privacy Checkup" />
                <MenuItem icon={PrivacyCenter} title="Privacy Center" />
                <MenuItem icon={ActivityLog} title="Activity log" />
                <MenuItem icon={Feed} title="Feed" />
              </>
            )}
            {selectedMenu === "language" && (
              <>
                <div className="pb-3 px-2 text-[#E7E9ED] flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedMenu("settings");
                      setCurrentOption("Settings & privacy");
                      setslideDirection('backword')
                    }}
                    className="size-10 hover:bg-[#4E4F50] flex justify-center duration-300 items-center rounded-full">
                    <Arrow className=" size-5" />
                  </button>
                  <span className="text-xl">{currentOption}</span>
                </div>
                <MenuItem
                  icon={Language}
                  title="Facebook Language"
                  currentOption="English (US)"
                  hasSubMenu
                />
                <MenuItem icon={Settings} title="View All Settings" />
              </>
            )}
            {selectedMenu === "help-support" && (
              <>
                <div className="pb-3 px-2 text-[#E7E9ED] flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedMenu("initialMenu");
                      setCurrentOption(null);
                      setslideDirection('backword')
                    }}
                    className="size-10 hover:bg-[#4E4F50] flex justify-center duration-300 items-center rounded-full">
                    <Arrow className=" size-5" />
                  </button>
                  <span className="text-xl">{currentOption}</span>
                </div>
                <MenuItem icon={NeedHelp} title="Help Center" />
                <MenuItem icon={Email} title="Support Inbox" />
                <MenuItem icon={Report} title="Report a problem" />
              </>
            )}
          </ResizeDropdown>
        </div>
      )}
    </MotionConfig>
  );
};

export default DropdownMenu;
