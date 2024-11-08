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
import Link from "next/link";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const updatedDetails = teamDetails.map((member) => ({
      ...member,
      team_name: teamName,
    }));

    if (teamName.length > 0) {

      let pushToDB = false;

      for (let i = 0; i < updatedDetails.length; i++) {
        const duplicateMember = userTable.some(
          (user) =>
            user.team_member_email === updatedDetails[i].team_member_email
        );
        const duplicateTeamName = userTable.some(
          (user) => user.team_name === updatedDetails[i].team_name
        );

        if (duplicateTeamName) {
          setErrorMessage(
            `Team '${updatedDetails[i].team_name}' Already exists`
          );
          setLoading(false);
          pushToDB = false;
          break;
        } else if (duplicateMember) {
          setErrorMessage(
            `${updatedDetails[i].team_member_email} Already exists`
          );
          setLoading(false);
          pushToDB = false;
          break;

        } else {
          setErrorMessage("");
          pushToDB = true;
        }
      }

      if (pushToDB) {
        try {
          const { data, error } = await supabase
            .from("users")
            .insert(updatedDetails)
            .select();
          if (data) {
            setRegistrationSuccess(true)
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    } else {
      alert("Please fill in all the values");
      setLoading(false);
    }
  };

  const handleMemberChange = (index: number, field: "team_member_name" | "team_member_email" | "team_name", value: string) => {
    const updatedDetails = [...teamDetails];

    updatedDetails[index][field] = value;
    setTeamDetails(updatedDetails);
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
        setUserTable(data || []);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    setTeamDetails(
      Array.from({ length: memberCount }, () => ({
        team_member_name: "",
        team_member_email: "",
        team_name: "",
      }))
    );
  }, [memberCount]);

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
                Registration for AI Hunt
              </ModalHeader>

              {registrationSuccess ? (
                <>
                  <ModalBody>
                    <div className="flex justify-center">
                      <h1 className="text-center">
                        You have successfully registered for hunt AI
                      </h1>
                    </div>
                  </ModalBody>{" "}
                  <ModalFooter>
                    <Link href="/">
                      <Button
                        color="danger"
                        variant="light"
                        onPress={closeModal}
                      >
                        Close
                      </Button>
                    </Link>
                  </ModalFooter>
                </>
              ) : (
                <>
                  <ModalBody>
                    <div>
                      <Input
                        type="text"
                        variant="faded"
                        label="Team Name"
                        value={teamName}
                        onValueChange={setTeamName}
                      />
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
                        </>
                      ))}
                      {errorMessage.length > 0 ? (
                        <p
                          style={{
                            color: errorMessage.length > 0 ? "red" : "black",
                          }}
                        >
                          {errorMessage}
                        </p>
                      ) : null}
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
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Page;
