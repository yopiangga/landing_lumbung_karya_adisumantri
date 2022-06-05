export function TitleComp({ title, desc }) {
  return (
    <div>
      <h1 className="text-4xl font-medium">{title}</h1>
      <div className="w-40 h-0.5 mt-6 mx-auto bg-yellow-400 "></div>
      <h3 className="mt-6 text-xl text-gray-600 dark:text-white">{desc}</h3>
    </div>
  );
}
