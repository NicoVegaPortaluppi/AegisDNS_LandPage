interface ButtonsProps {
  children: React.ReactNode;
}

export function Buttons({ children }: ButtonsProps) {
  return (
    <button
      className="
      text-2xl font-bold text-[#3b82f6]
      transition-colors duration-300 ease-in-out
      hover:text-[#60a5fa]
      hover:brightness-125
      active:scale-95 cursor-pointer
    "
    >
      {children}
    </button>
  );
}
