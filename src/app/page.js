import Image from "next/image";
import Testimonial from "./component/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-12 md:justify-center">
      <Testimonial />
    </main>
  );
}
