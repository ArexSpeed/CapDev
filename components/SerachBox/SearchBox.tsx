import { SearchIcon } from '../Icons/FontIcons';

interface SearchBoxProps {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
  placeholder?: string;
  /*   session: string; */
}

export const SearchBox = ({ searchValue, setSearchValue, placeholder }: SearchBoxProps) => {
  return (
    <div className="flex flex-row items-center w-full rounded-lg bg-primary ">
      <div className="flex items-center content-center border-r-[2px] border-r-secondary border-solid px-2 ">
        <SearchIcon />
      </div>
      <input
        value={searchValue}
        type="text"
        className="w-full h-full px-2 bg-transparent border-none outline-none"
        placeholder={placeholder}
        onChange={(e) => setSearchValue!(e.target.value)}
      />
    </div>
  );
};
