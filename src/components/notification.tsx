import React from "react";
import {notification} from "antd";
import {NotificationPlacement} from "antd/lib/notification";
import {NotificationType} from "../utilities/types";
import {AiOutlineClose} from "react-icons/ai";

export const openPopup = (
  type: NotificationType,
  message: React.ReactNode,
  description: React.ReactNode,
  placement?: NotificationPlacement
) => {
  notification[type]({
    message: <span className="dark:!text-gray-200"> {message}</span>,
    description: <span className="dark:!text-gray-200"> {description}</span>,
    placement,
    closeIcon: (
      <AiOutlineClose
        name={"close"}
        className="!text-xl dark:text-slack !text-grey-900 mb-4 cursor-pointer"
      />
    ),
    className: "dark:!bg-slack-content dark:!border dark:!border-[#4c545f]",
  });
};
