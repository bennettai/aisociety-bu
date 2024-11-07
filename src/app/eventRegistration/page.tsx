"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "@nextui-org/react";
import { supabase } from "../../../supabase";

type Props = {};

const Page = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);
  const [teamName, setTeamName] = useState("");
  const [memberCount, setMemberCount] = useState(1);
  const [teamDetails, setTeamDetails] = useState(
    Array.from({ length: 1 }, () => ({
      team_member_name: "",
      team_member_email: "",
      team_name: "",
    }))
  );
  const [loading, setLoading] = useState(false);
  const [userTable, setUserTable] = useState<any[]>([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleSubmit = async () => {
    setLoading(true);

    if (
      teamName.length > 0 &&
      errorMessage.length === 0 &&
      warningMessage.length === 0
    ) {
      const updatedDetails = teamDetails.map((member) => ({
        ...member,
        team_name: teamName,
      }));

      try {
        const { data, error } = await supabase
          .from("users")
          .insert(updatedDetails)
          .select();

        if(data){
          alert("Registration Succesfull !")
          closeModal()
        }

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all the values");
      setLoading(false);
    }
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    const updatedDetails = [...teamDetails];
    const isDuplicate = userTable.some((user) => user[field] === value);

    if (isDuplicate) {
      setErrorMessage(`${value} already exists in our database`);
    } else {
      setErrorMessage("");
      updatedDetails[index][field] = value;
      setTeamDetails(updatedDetails);
    }
  };

  const checkTeamName = () => {
    const isDuplicate = userTable.some(
      (user) => user["team_name"] === teamName
    );
    return isDuplicate;
  };

  const fetchUserTable = async () => {
    try {
      let { data: users, error } = await supabase.from("users").select("*");

      if (users) {
        return users || [];
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (userTable.length === 0) {
        const data = await fetchUserTable();
        setUserTable(data);
      }
    };

    loadData();

    const isDuplicate = checkTeamName();

    if (isDuplicate) {
      setWarningMessage(`${teamName} is already Taken`);
    } else {
      setWarningMessage("");
    }

    setTeamDetails(
      Array.from({ length: memberCount }, () => ({
        team_member_name: "",
        team_member_email: "",
        team_name: teamName,
      }))
    );
  }, [memberCount, teamName]);

  return (
    <div className="container mx-auto">
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Register for AI Hunt
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    type="text"
                    variant="faded"
                    label="Team Name"
                    value={teamName}
                    onValueChange={setTeamName}
                  />
                  {warningMessage.length > 0 ? (
                    <p
                      style={{
                        color: warningMessage.length > 0 ? "red" : "black",
                        marginTop: 15,
                      }}
                    >
                      {warningMessage}
                    </p>
                  ) : null}

                  <div className="flex mt-4 flex-1 items-center">
                    <p className="mr-4">Number of Members</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered">{memberCount}</Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Static Actions"
                        onAction={(key) => setMemberCount(Number(key))}
                      >
                        <DropdownItem key="1">1</DropdownItem>
                        <DropdownItem key="2">2</DropdownItem>
                        <DropdownItem key="3">3</DropdownItem>
                        <DropdownItem key="4">4</DropdownItem>
                        <DropdownItem key="5">5</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>

                <div>
                  {Array.from({ length: memberCount }, (_, index) => (
                    <>
                      <div
                        key={index}
                        className="flex flex-1 mb-3 items-center"
                      >
                        <Input
                          type="email"
                          variant="faded"
                          label="Member Mail"
                          // color={errorMessage.length > 0 ? "danger" : "default"}
                          value={teamDetails[index]?.team_member_email}
                          onValueChange={(value) =>
                            handleMemberChange(
                              index,
                              "team_member_email",
                              value
                            )
                          }
                        />
                        <div className="ml-4">
                          <Input
                            type="text"
                            variant="faded"
                            label="Name"
                            value={teamDetails[index]?.team_member_name}
                            onValueChange={(value) =>
                              handleMemberChange(
                                index,
                                "team_member_name",
                                value
                              )
                            }
                          />
                        </div>
                      </div>
                      {errorMessage.length > 0 ? (
                        <p
                          style={{
                            color: errorMessage.length > 0 ? "red" : "black",
                          }}
                        >
                          {errorMessage}
                        </p>
                      ) : null}
                    </>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeModal}>
                  Close
                </Button>

                {loading ? (
                  <Spinner />
                ) : (
                  <Button color="primary" onPress={handleSubmit}>
                    Submit
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Page;
