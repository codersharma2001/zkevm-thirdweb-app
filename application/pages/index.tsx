import type { NextPage } from "next";
import { useState } from "react";
import {Web3Button, useContract, useContractRead , useContractWrite} from "@thirdweb-dev/react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { greeter } from "../const/contracts";


const Home: NextPage = () => {

  const {contract} = useContract(greeter);

  const {data : greeting , isLoading , error } = useContractRead(contract , "greet");
  
  const {
    mutateAsync : setGreeting
  } = useContractWrite(contract , "setGreeting" );
  return (
    <div className="w-full mx-auto pr-8 pl-8 max-w-7xl relative pb-10 mt-32">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        Hello Web3
        <span
          className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4
        text-gray-400
        "
        >
          {" "}
          👋
        </span>
      </h1>
         <p>
          {isLoading && "Loading..."}
           {greeting}
         </p>

         <Web3Button contractAddress={greeter} action={ () => setGreeting({
            args : ["Hello wolrd this is new value "],
            
         })}>
          Set Greeting
         </Web3Button>
    </div>
  );
};

export default Home;
