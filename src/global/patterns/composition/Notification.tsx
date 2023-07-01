import React, { ElementType, FC } from "react";

type NotificationProps = {
  text: string;
  icon: ElementType;
};
const Notification: FC<NotificationProps> = ({ text, icon: Icon }) => {
  return (
    <div>
      {text}
      <Icon />
    </div>
  );
};

export default Notification;
