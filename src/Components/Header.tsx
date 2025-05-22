
interface CoupleHeaderProps {
  image: string;
  firstPerson: string;
  secondPerson: string;
  descricao: string;
}

export default function CoupleHeader({
  image,
  firstPerson,
  secondPerson,
  descricao,
}: CoupleHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full border-4 border-love overflow-hidden">
          <img
            src={image}
            alt={`${firstPerson} & ${secondPerson}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className="font-script text-3xl font-bold">
        <span className="text-gray-800 dark:text-gray-200">{firstPerson}</span>
        <span className="text-love animate-pulse-light mx-2">&</span>
        <span className="text-gray-800 dark:text-gray-200">{secondPerson}</span>
      </h1>

      <p className="text-gray-600 dark:text-gray-400 italic">
        "{descricao}"
      </p>
    </div>
  );
}
