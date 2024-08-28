import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
    <div>王某人的 Next</div>
    <Button> Click Me </Button>
    <Button variant={"destructive"}> destructive </Button>
    <Button variant={"ghost"}> ghost </Button>
    <Button variant={"link"}> link </Button>
    <Button variant={"outline"}> outline </Button>
    <Button variant={"secondary"}> secondary </Button>
    </>
  );
}
