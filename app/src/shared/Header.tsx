interface HeaderProps {
  main: string;
  secondary?: string;
}

export default function Header({ main, secondary }: HeaderProps) {
  return (
    <div className="flex flex-col items-center mb-4 mt-16">
      <h1 className="text-black text-4xl font-bold drop-shadow-lg">{main}</h1>
      {secondary && (
        <p className="text-black text-lg drop-shadow-md mt-1">{secondary}</p>
      )}
    </div>
  );
}
