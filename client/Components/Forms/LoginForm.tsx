"use client";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { styles } from "@/Style/styles";
import { Divider } from "@nextui-org/divider";
import { signIn, useSession } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <Card>
      <CardContent className="flex w-full justify-center items-center *:gap-5 py-4 flex-col">
        <h1 className={`${styles.heading}`}>Login</h1>
        <form className="flex w-full justify-center items-center flex-col">
          <Label
            className="flex justify-center flex-col items-center w-11/12 text-center"
            htmlFor=" email"
          >
            <p className="w-11/12 text-start">Email</p>
            <Input
              className="my-1 w-11/12"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </Label>
          <Label
            className="flex justify-center flex-col items-center w-11/12 text-center"
            htmlFor=" password"
          >
            <p className="w-11/12 text-start">Password</p>
            <Input
              className="my-1 w-11/12"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </Label>
          <Button type="submit">Login</Button>
        </form>
        <div className="flex w-full justify-center items-center">
          <Divider className="my-4 w-10/12 !border-solid" />
        </div>
        <div className="flex justify-evenly items-center">
          <Button onClick={() => signIn("google")}>
            <FcGoogle className="mr-2" size={20} /> Google
          </Button>
          <Button>
            <BsGithub size={20} className="mr-2" /> Github
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
