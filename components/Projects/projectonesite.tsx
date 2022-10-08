import { DeleteIcon, EditIcon, HeartIcon } from 'components/Icons/FontIcons';
import { CssIcon, HtmlIcon, ReactIcon, SassIcon } from 'components/Icons/SkillsIcons';

export default function ProjectOneSiteItem() {
  return (
    <div className="p-8 w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex min-h-[256px] min-w-[256px] bg-blue rounded-lg"></div>
        <div className="flex flex-col self-center ml-8 mr-auto">
          <h1 className="font-bold border-b-8 border-b-solid border-b-green text-32 w-[40%]">
            Project Name
          </h1>
          <span className="mt-8">
            Excpert Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in officia
            fugiat, natus accusamus laborum eveniet incidunt corporis omnis laudantium.
          </span>
        </div>
        <div className="flex flex-row gap-12 p-8 text-center items-center h-12 w-[30rem]">
          <div className="relative w-10 h-8 items-center">
            <button className="absolute w-6 h-6 text-blue">
              <HeartIcon />
              <div className="w-4 h-4 bg-[#95E616] rounded-full text-xs text-gray-900 absolute bottom-[-5px] right-[-5px]">
                24
              </div>
            </button>
          </div>
          <div className="flex">
            <span className="">Author Name</span>
          </div>
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-blue">
              <img src="" alt="" />
            </div>
          </div>
          <div className="">
            <EditIcon />
          </div>
          <div className="">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="my-2">
        <h2 className="my-2">Skills</h2>
        <div className="">
          <div className="flex flex-row w-full h-6 gap-2 my-3 text-blue">
            <HtmlIcon />
            <CssIcon />
            <SassIcon />
            <ReactIcon />
          </div>
        </div>
      </div>
      <div className="my-2">
        <h2 className="my-2">Project Group</h2>
        <div className="flex flex-col">
          <div className="flex my-1 h-12">
            <div className="flex flex-row bg-white rounded-lg items-center gap-4">
              <div className="p-2">User Name</div>
              <div className="p-2">Frontend Developer</div>
              <div className="p-2">Junior</div>
            </div>
          </div>
          <div className="flex my-1 h-12">
            <div className="flex flex-row bg-white rounded-lg items-center gap-4">
              <div className="p-2">User Name</div>
              <div className="p-2">Frontend Developer</div>
              <div className="p-2">Junior</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
