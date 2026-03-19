interface ButtonsProps {
  children: React.ReactNode;
}

export function Buttons({ children }: ButtonsProps) {
  return (
    <button className="text-2xl font-bold text-blue-400"> {children} </button>
  );
}
