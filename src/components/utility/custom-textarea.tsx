import { InputHTMLAttributes, forwardRef } from "react";

import { classNames } from "@/utility/classNames";

export interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {}

const CustomTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={classNames(
          "max-h-64 min-h-[140px] w-full overflow-y-auto rounded-lg border-none bg-background font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent",
          className,
        )}
      />
    );
  },
);

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
