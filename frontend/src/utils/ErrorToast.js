import { toast } from "sonner";

export const ErrorToast = (title, description) => {
  toast.error(title, {
    className:
      "border-destructive bg-destructive text-destructive-foreground text-base font-semibold",
    description: description,
    descriptionClassName: "text-sm opacity-90",
    duration: 3000,
  });
};
