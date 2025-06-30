"use client";

import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/actions/contact";
import SubmitButton from "../shared/submit-button";
import SectionHeader from "../shared/section-header";

const ContactForm = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await sendContactEmail(formData);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      formData.set("name", "");
      formData.set("email", "");
      formData.set("subject", "");
      formData.set("message", "");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <SectionHeader
        title="Get in Touch"
        description="Have an idea, opportunity, or just want to say hi? My inbox is always open."
      />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        action={handleSubmit}
        className="mx-auto max-w-xl space-y-6"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            aria-label="Subject"
          />
        </div>
        <div className="space-y-2">
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            aria-label="Your Message"
            className="min-h-[150px]"
          />
        </div>

        <SubmitButton />
      </motion.form>
    </section>
  );
};

export default ContactForm;
