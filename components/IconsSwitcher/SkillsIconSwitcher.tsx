import {
  AngularIcon,
  CPlusIcon,
  CSharpcon,
  CssIcon,
  DrupalIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoIcon,
  NetIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
  WordpressIcon
} from 'components/Icons/SkillsIcons';

interface Props {
  name: string;
  className: string;
}

const SkillsIconSwitcher = ({ name, className }: Props) => {
  switch (name) {
    case 'html':
      return <HtmlIcon className={className} />;
    case 'css':
      return <CssIcon className={className} />;
    case 'sass':
      return <SassIcon className={className} />;
    case 'react':
      return <ReactIcon className={className} />;
    case 'javascript':
      return <JavaScriptIcon className={className} />;
    case 'typescript':
      return <TypeScriptIcon className={className} />;
    case 'tailwind':
      return <TailwindIcon className={className} />;
    case 'node':
      return <NodeIcon className={className} />;
    case 'next':
      return <NextIcon className={className} />;
    case 'angular':
      return <AngularIcon className={className} />;
    case 'csharp':
      return <CSharpcon className={className} />;
    case 'cplus':
      return <CPlusIcon className={className} />;
    case 'php':
      return <PhpIcon className={className} />;
    case 'drupal':
      return <DrupalIcon className={className} />;
    case 'java':
      return <JavaIcon className={className} />;
    case 'python':
      return <PythonIcon className={className} />;
    case 'postgres':
      return <PostgresIcon className={className} />;
    case 'mongo':
      return <MongoIcon className={className} />;
    case 'wordpress':
      return <WordpressIcon className={className} />;
    case 'net':
      return <NetIcon className={className} />;
    default:
      return '';
  }
};

export default SkillsIconSwitcher;
