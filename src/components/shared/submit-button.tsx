"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send />
          Send Message
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
