interface TitleProps {
  pageTitle: string;
}

export const PageTitle = ({ pageTitle }: TitleProps) => {
  return <h1 className="p-3 text-32 text-gray"> {pageTitle} </h1>;
};
