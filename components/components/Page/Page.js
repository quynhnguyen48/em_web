import Header from "components/Header";

const Page = ({
  title,
  parentUrl,
  children,
  rightContent,
  className = "",
  rightContentClassName = "",
  contentClassName = "",
}) => {
  return (
    <div className="flex flex-col h-screen">
      <Header title={title} parentUrl={parentUrl}/>
      <div className={`flex px-6 flex-1 overflow-y-auto ${className}`} id="pageContent">
        <div className={`flex-1 pb-6 h-full pr-6 ${contentClassName}`}>
          {children}
        </div>
        {rightContent && (
          <div className={`w-79 ml-4 py-6 ${rightContentClassName}`}>
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
