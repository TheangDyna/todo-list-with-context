import React, { useState, useEffect } from "react";
import ClockIcon from "./icons/ClockIcon";
import RocketLaunchIcon from "./icons/RocketLaunchIcon";
import CheckCircleIcon from "./icons/CheckCircleIcon";
import { Button } from "@nextui-org/react";
import { Status } from "../types";

interface StatusButtonProps {
  status: Status;
  onStatusChange: (newStatus: Status) => void;
}

const StatusButton: React.FC<StatusButtonProps> = ({
  status,
  onStatusChange,
}) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (showText) {
      const timer = setTimeout(() => setShowText(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showText]);

  const handleStatusChange = () => {
    const newStatus =
      status === "todo" ? "doing" : status === "doing" ? "done" : "todo";
    onStatusChange(newStatus);
    setShowText(true);
  };

  const getStatusIcon = () => {
    switch (status) {
      case "todo":
        return <ClockIcon className="size-5" />;
      case "doing":
        return <RocketLaunchIcon className="size-5" />;
      case "done":
        return <CheckCircleIcon className="size-5" />;
      default:
        return null;
    }
  };

  const statusStyles = {
    todo: "bg-yellow-100 text-yellow-800",
    doing: "bg-blue-100 text-blue-800",
    done: "bg-green-100 text-green-800",
  };

  return (
    <Button
      startContent={getStatusIcon()}
      className={`min-w-max ml-2 px-3 transition duration-300 ease-in-out transform bg-transparent ${statusStyles[status]}`}
      onClick={handleStatusChange}
    >
      {showText && (
        <span className="ml-1 animate-fadeIn text-sm capitalize">{status}</span>
      )}
    </Button>
  );
};

export default StatusButton;
