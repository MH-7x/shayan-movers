import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mt-52">
      <h1 className="text-4xl font-bold text-center mt-20">
        Shayan Movers and Packers in Dubai
      </h1>
      <div className="mt-10 flex gap-10">
        <Button wtsBtn>Contact Us on WhatsApp</Button>
        <Button callBtn className="ml-4">
          Call Us
        </Button>
        <Button className="ml-4">Call Us</Button>
        <Button className="ml-4" variant={"link"}>
          Call Us
        </Button>
        <Button className="ml-4" variant={"outline"}>
          Call Us
        </Button>
        <Button className="ml-4" variant={"secondary"}>
          Call Us
        </Button>
      </div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
}
