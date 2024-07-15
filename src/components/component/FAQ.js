import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "../ui/input";
import { CgChevronRight } from "react-icons/cg";
import { motion } from "framer-motion";

export function FAQcontent() {
  return (
    <div className="bg-black flex flex-col justify-center items-center p-16">
      <h1 className="text-5xl font-bold m-6 text-white">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-[78vw] text-white  p-2 text-2xl flex flex-col gap-2"
      >
        <AccordionItem value="item-1" className=" bg-[#2D2D2D] px-6 py-2">
          <AccordionTrigger>What is Netflix?</AccordionTrigger>
          <AccordionContent className="text-2xl">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=" bg-[#2D2D2D] px-6 py-2">
          <AccordionTrigger>How much does Netflix cost?</AccordionTrigger>
          <AccordionContent className="text-2xl">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            ₹149 to ₹649 a month. No extra costs, no contracts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className=" bg-[#2D2D2D] px-6 py-2">
          <AccordionTrigger>Where can I watch?</AccordionTrigger>
          <AccordionContent className="text-2xl">
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. You can also download your favourite shows with
            the iOS or Android app. Use downloads to watch while you're on the
            go and without an internet connection. Take Netflix with you
            anywhere.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className=" bg-[#2D2D2D] px-6 py-2">
          <AccordionTrigger>How do I cancel?</AccordionTrigger>
          <AccordionContent className="text-2xl">
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className=" bg-[#2D2D2D] px-6 py-2">
          <AccordionTrigger>What can I watch on Netflix?</AccordionTrigger>
          <AccordionContent className="text-2xl">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className=" bg-[#2D2D2D] px-6 py-2">
          <AccordionTrigger>Is Netflix good for kids?</AccordionTrigger>
          <AccordionContent className="text-2xl">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h1 className="mt-10 text-xl text-white">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div className="flex items-center space-x-2 w-[40vw] mt-3">
        <Input
          type="email"
          className="bg-black/60 border-[1px] h-[50px] text-white rounded-sm border-gray-600 hover:border-[1px] hover:border-gray-300"
          placeholder="Email address"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="h-[50px] w-[20vw] bg-[#e50914] font-extrabold text-2xl hover:bg-red-700 rounded-md px-3 text-white flex flex-row items-center"
        >
          Get Started <CgChevronRight width={30} height={30} />
        </motion.button>
      </div>
    </div>
  );
}
