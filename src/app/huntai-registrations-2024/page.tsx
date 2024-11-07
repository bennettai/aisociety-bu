import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-14 px-4 md:px-6 py-12 min-h-screen text-center">
        page
      </div>
        <Button color="danger" variant="ghost" >Button</Button>
    </div>
  );
};

export default page;
