const MultiLanguagesItem = ({ languagePack = [], titleClassName = "" }) => {
  return (
    <div className="flex flex-col mt-4 space-y-4">
      {languagePack?.map((pack, index) => {
        return (
          <div className="flex gap-x-4" key={index}>
            <span className={`text-primary font-bold ${titleClassName}`}>
              {pack?.title}
            </span>
            <span className="flex-1">{pack?.detail}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MultiLanguagesItem;
