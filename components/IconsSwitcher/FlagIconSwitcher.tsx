import {
  GermanyIcon,
  BritainIcon,
  FranceIcon,
  UkraineIcon,
  ItalyIcon,
  PolandIcon
} from 'components/Icons/FlagIcons';

interface Props {
  country: string;
  className: string;
}

const FlagIconSwitcher = ({ country, className }: Props) => {
  switch (country) {
    case 'pl':
      return <PolandIcon className={className} />;
    case 'ger':
      return <GermanyIcon className={className} />;
    case 'en':
      return <BritainIcon className={className} />;
    case 'fr':
      return <FranceIcon className={className} />;
    case 'ua':
      return <UkraineIcon className={className} />;
    case 'it':
      return <ItalyIcon className={className} />;
    default:
      return '';
  }
};

export default FlagIconSwitcher;
