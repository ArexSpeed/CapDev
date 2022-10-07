import {
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  WebsiteIcon
} from 'components/Icons/SocialIcons';

interface Props {
  name: string;
  className: string;
}

const SocialIconSwitcher = ({ name, className }: Props) => {
  switch (name) {
    case 'website':
      return <WebsiteIcon className={className} />;
    case 'facebook':
      return <FacebookIcon className={className} />;
    case 'linkedin':
      return <LinkedinIcon className={className} />;
    case 'twitter':
      return <TwitterIcon className={className} />;
    case 'github':
      return <GithubIcon className={className} />;
    case 'dribbble':
      return <DribbbleIcon className={className} />;
    default:
      return '';
  }
};

export default SocialIconSwitcher;
