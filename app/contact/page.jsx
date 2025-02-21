import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="flex gap-40 flex-col md:flex-row md:p-5 p-2 lg:gap-40 lg:p-20 md:gap-10" id="contact">
      <ShineBorder
        className="rounded-lg shadow-lg"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="flex flex-col gap-8  box-border w-full p-5">
          <h2 className="text-5xl bold jetbrains-mono">Get in touch</h2>
          <div className="jetbrains-mono">
            I enjoy working with dedicated creatives from businesses that make
            the world beautiful.
          </div>
          <div className="jetbrains-mono">
            We can do so much together. Let&apos;s talk.
          </div>
          <Input
            label="Full Name"
            labelPlacement="inside"
            type="text"
            isRequired
            variant="underlined"
            classNames={{
              input: "bg-transparent",
              inputWrapper: "bg-transparent",
            }}
          />
          <Input
            label="Email Address"
            labelPlacement="inside"
            type="email"
            isRequired
            variant="underlined"
            classNames={{
              input: "bg-transparent",
              inputWrapper: "bg-transparent",
            }}
          />
          <Input
            label="Enter your description"
            labelPlacement="inside"
            type="text"
            isRequired
            variant="underlined"
            classNames={{
              input: "bg-transparent",
              inputWrapper: "bg-transparent",
            }}
          />
          <Button
            color="primary"
            type="submit"
            className="w-min bg-blue-600 text-white"
          >
            Send Message
          </Button>
        </div>
      </ShineBorder>
      <div className="flex flex-col gap-14 justify-center">
        <ShineBorder
          className="rounded-lg shadow-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex gap-5">
            <div className="rounded-full border p-4">
              <FaPhoneAlt size={33} />
            </div>
            <div>
              <div className="font-bold text-2xl">Phone</div>
              <div className="text-gray-400">(+91) 701 6861 135</div>
            </div>
          </div>
        </ShineBorder>
        <ShineBorder
          className="rounded-lg shadow-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex gap-5">
            <div className="rounded-full border p-4">
              <MdOutlineEmail size={33} />
            </div>
            <div>
              <div className="font-bold text-2xl">Email</div>
              <div className="text-gray-400">dvlalu7@gmail.com</div>
            </div>
          </div>
        </ShineBorder>
        <ShineBorder
          className="rounded-lg shadow-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex gap-5">
            <div className="rounded-full border p-4">
              <FaLocationDot size={33} />
            </div>
            <div>
              <div className="font-bold text-2xl">Address</div>
              <div className="text-gray-400">Junagadh</div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
