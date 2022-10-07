import { SearchIcon } from '../Icons/FontIcons';

export interface SearchBoxProps {
  searchValue: string;
  setSearchValue: string;
  placeholder: string;
  /*   session: string; */
}

export const SearchBox = ({ searchValue, setSearchValue, placeholder }: SearchBoxProps) => {
  return (
    <div className="flex flex-row items-center w-full bg-red-500 rounded-lg ">
      <div className="flex items-center content-center border-r-[2px] border-solid px-2 ">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="w-full h-full px-2 bg-transparent border-none outline-none"
        placeholder={placeholder}
        /* onChange={(e) => setSearchValue(e.target.value)} */
      />
    </div>
  );
};
