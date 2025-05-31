"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";
import SubmitButton from "../shared/submit-button";

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
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="from-foreground via-primary to-foreground/70 bg-gradient-to-r bg-clip-text pb-6 text-5xl font-bold text-transparent md:text-6xl">
          Get in Touch
        </h2>
        <p className="text-secondary-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        action={handleSubmit}
        className="mx-auto mt-12 max-w-xl space-y-6"
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
