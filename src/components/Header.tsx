// import { Button, Input } from "@nextui-org/react";
import React, { useContext } from "react";
import { useTodos } from "../contexts/TodosContext";
// import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";
// import FunnelIcon from "./icons/FunnelIcon";
// import PlusIcon from "./icons/PlusIcon";

const Header: React.FC = () => {
  const { example, setExample } = useTodos();

  console.log(example);

  return (
    <div className="h-20 flex items-center justify-between px-5">
      {example}
      <button onClick={() => setExample("hi")}>click</button>
      {/* <div className="flex gap-5">
        <Input
          classNames={{
            base: "max-w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
          startContent={<MagnifyingGlassIcon className="size-6" />}
        />
        <Button isIconOnly className="bg-default-400/20">
          <FunnelIcon className="size-6 text-default-500" />
        </Button>
      </div>
      <Button isIconOnly className="bg-default-400/20">
        <PlusIcon className="size-6 text-default-500" />
      </Button> */}
    </div>
  );
};

export default Header;
