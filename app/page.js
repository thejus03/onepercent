import Card from "../components/Card";
import { RightBar } from "../components/RightBar";
import Table from "../components/Table";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-between ">
      <div className=" overflow-auto flex flex-col mx-9 w-full h-full items-center">
        <div className=" mt-2 sm:w-[80%] w-[97%] max-w-[95vw] p-8 rounded-2xl flex justify-start ">
          <Table />
        </div>
        <div className=" overflow-auto space-y-3 w-[80%] max-w-[85vw] p-8 mt-12 rounded-2xl flex justify-center">
          <Card />
        </div>
      </div>
      <div className="border-x-2 w-[30%]  h-[93vh] lg:block hidden">
        <RightBar />
      </div>
    </main>
  );
}
