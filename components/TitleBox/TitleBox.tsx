import Link from 'next/link';

export interface TitleBoxProps {
  title: string;
  button: string;
  href: string;
  /*   session: string; */
}

export const TitleBox = ({ title, button, href /* session */ }: TitleBoxProps) => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <h2 className="text-3xl">{title}</h2>
      {
        /* session */ button && (
          <Link href={href} passHref>
            <a className="px-4 py-1 bg-[#95E616] rounded-lg text-base ">{button}</a>
          </Link>
        )
      }
    </div>
  );
};
