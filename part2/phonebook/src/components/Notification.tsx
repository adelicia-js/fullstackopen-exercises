import { NotificationProps } from "../types";

export default function Notification(props: NotificationProps) {
  if (props.message === null) {
    return null;
  }

  return <div className={`${props.messageType} message`}>{props.message}</div>;
}
