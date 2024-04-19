import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { styles } from "@/Style/styles";
import { Divider } from "@nextui-org/divider";
import LoginForm from "@/Components/Forms/LoginForm";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Tabs defaultValue="login" className="w-[400px] *:gap-3">
        <TabsList className="grid w-full h-[42px] grid-cols-2">
          <TabsTrigger className="h-full" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="h-full" value="signin">
            Signin
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signin">
          <Card>
            <CardContent className="flex w-full justify-center items-center *:gap-3 py-4 flex-col">
              <h1 className={`${styles.heading}`}>Sign In</h1>
              <form className="flex w-full justify-center items-center flex-col">
                <Label
                  className="flex justify-center flex-col items-center w-11/12 text-center"
                  htmlFor="name"
                >
                  <p className="w-11/12 text-start">Name</p>
                  <Input
                    className="my-1 w-11/12"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                  />
                </Label>
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
                <Button type="submit">Sign In</Button>
              </form>
              <div className="flex w-full justify-center items-center">
                <Divider className="my-4 !border-[1px] w-9/12 !border-solid" />
              </div>
              <div className="flex justify-evenly items-center">
                <Button>
                  <FcGoogle className="mr-2" size={20} /> Google
                </Button>
                <Button>
                  <BsGithub size={20} className="mr-2" /> Github
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
