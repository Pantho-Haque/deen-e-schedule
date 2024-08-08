import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "./layout";
import Tiptap from "@/components/tiptap";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [des, setDes] = useState("");

  return (
    <RootLayout>
      <div>
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p>This is the main content of the home page.</p>
        <div dangerouslySetInnerHTML={{ __html: des }}>
        </div>
        
        <Tiptap des={des} setDes={setDes} />
      </div>
    </RootLayout>
  );
}
