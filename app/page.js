import Card from "@/components/Card";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-between">
      <div className="flex flex-col mx-9 w-full items-center">
        <div className=" mt-2 sm:w-[80%] w-[97%] max-w-[95vw] p-8 rounded-2xl flex justify-start ">
          <Card/>
        </div>
        <div className=" space-y-3 w-[80%] max-w-[85vw] p-8 mt-12 rounded-2xl flex justify-center">
          Right Bar
        </div>
      </div>
      <div className="border-x-2 w-[30%] h-[93vh] lg:block hidden">
        <Table />
      </div>
    </main>
  );
}
