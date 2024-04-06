import Card from "../components/Card";
import { RightBar } from "../components/RightBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-between ">
      <div className=" overflow-auto flex flex-col mx-9 w-full h-full items-center justify-center">
        <div className=" space-y-3 w-full max-w-[600px] p-8 mt-12 rounded-2xl flex items-center justify-center">
          <Card />
        </div>
      </div>
      <div className="border-x-2 w-[30%]  h-[93vh] lg:block hidden">
        <RightBar />
      </div>
    </main>
  );
}
