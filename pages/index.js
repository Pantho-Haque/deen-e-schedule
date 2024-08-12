import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "./layout";
import Tiptap from "@/components/tiptap";
import TimePicker from "@/components/timepicker";

import { useState } from "react";

// db
import { addData, updateData } from "../lib/indexedDB";
import EventSchedule from "@/components/eventSchedule";

const inter = Inter({ subsets: ["latin"] });

export default function Home() { 
  const [des, setDes] = useState("");
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('18:00');



  const saveData = async () => {
    await updateData({
      name: 'faba',
      description: des,
      startTime,
      endTime,
    });
  };




  return (
    <RootLayout>
      <div>
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p>This is the main content of the home page.</p>
        <div
          className="formatted-content"
          dangerouslySetInnerHTML={{ __html: des }}
        ></div>
        <p>Start Time: {startTime}</p>
        <p>End Time: {endTime}</p>

        <button onClick={saveData} className="btn btn-primary mt-4">
          Save Data
        </button>


        <TimePicker
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />

        <Tiptap des={des} setDes={setDes} />
      </div>


      <EventSchedule />
    </RootLayout>
  );
}
