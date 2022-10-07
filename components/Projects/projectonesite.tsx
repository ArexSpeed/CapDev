import { HeartIcon } from 'components/Icons/FontIcons';
import { CssIcon, HtmlIcon, ReactIcon, SassIcon } from 'components/Icons/SkillsIcons';

export default function ProjectOneSite() {
  return (
    <div className="">
      <div className="flex flex-row justify-between w-full">
        <div className="flex min-h-[256px] min-w-[256px] bg-[#17ABDB] rounded-lg"></div>
        <div className="flex flex-col self-center ml-8 mr-auto">
          <h1 className="font-bold border-b-8 border-b-solid border-b-emerald-500">Project Name</h1>
          <span>
            Excpert Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in officia
            fugiat, natus accusamus laborum eveniet incidunt corporis omnis laudantium.
          </span>
        </div>
        <div className="flex flex-row gap-12 p-8">
          <div className="flex-none">
            <button className="absolute w-6 h-6 text-cyan-600">
              <HeartIcon />
              <div className="w-4 h-4 bg-[#95E616] rounded-full text-xs text-gray-900 absolute bottom-[-5px] right-[-5px]">
                24
              </div>
            </button>
          </div>
          <div className="flex-initial">
            <span className="">Author Name</span>
          </div>
          <div className="flex-initial">
            <div className="w-6 h-6 rounded-full bg-blue">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Skills</h2>
        <div className="flex flex-row w-full h-6 gap-2 my-3 text-cyan-600">
          <HtmlIcon />
          <CssIcon />
          <SassIcon />
          <ReactIcon />
        </div>
      </div>
      <div className="">
        <h2>Project Group</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <table>
              <tr>
                <td>User Name</td>
                <td>Frontend Developer</td>
                <td>Junior</td>
              </tr>
              <tr>
                <td>User Name</td>
                <td>Frontend Developer</td>
                <td>Junior</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
