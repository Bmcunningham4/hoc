interface HeaderProps {
  main: string;
  secondary?: string;
  blurred?: boolean;
  color?: 'black' | 'white';
}

export default function Header({ main, secondary, blurred = false, color = 'black' }: HeaderProps) {
  const getBackgroundColor = () => {
    if (!blurred) return {};
    
    return {
      backgroundColor: color === 'white' 
        ? "rgba(0, 0, 0, 0.3)" 
        : "rgba(255, 255, 255, 0.2)",
      padding: "0.5rem 1.5rem",
    };
  };

  return (
    <div className="flex flex-col items-center mb-4 mt-16">
      <div
        className={`${blurred ? 'rounded-lg px-6 py-3' : ''} text-center`}
        style={getBackgroundColor()}
      >
        <h1 className={`text-4xl font-bold drop-shadow-lg text-${color}`}>
          {main}
        </h1>
        {secondary && (
          <p className={`text-lg drop-shadow-md mt-1 ${color === 'white' ? 'text-gray-300' : 'text-gray-700'}`}>
            {secondary}
          </p>
        )}
      </div>
    </div>
  );
}