import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const UserForm = ({ initialValues }) => {
  const { email, name, mobile } = initialValues;

  return (
    <form className="flex flex-col gap-y-2 mt-4">
      <Label className="text-black">Email address</Label>
      <Input
        type="email"
        className="border-gray-400"
        value={email}
        disabled
        placeholder="Enter email address"
      />
      <Label className="text-black">Name</Label>
      <Input
        type="text"
        className="border-gray-400"
        value={name}
        placeholder="Enter Your Name"
      />
      <Label className="text-black">Mobile Number</Label>
      <Input
        type="tel"
        className="border-gray-400"
        value={mobile}
        placeholder="Enter Your Mobile Number"
      />
    </form>
  );
};

export default UserForm;
