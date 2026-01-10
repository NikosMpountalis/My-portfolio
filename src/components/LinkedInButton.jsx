import { Button } from 'primereact/button';

const DEFAULT_LINKEDIN_URL = 'https://www.linkedin.com/in/nick-bountalis-992ab8151/';

export default function LinkedInButton({
  url = DEFAULT_LINKEDIN_URL,
  label = 'LinkedIn',
  onClick,
  className,
  ...buttonProps
}) {
  const handleClick = onClick ?? (() => window.open(url, '_blank', 'noopener,noreferrer'));
  const buttonClassName = ['linkedin-button', className].filter(Boolean).join(' ');

  return (
    <Button
      label={label}
      icon="pi pi-linkedin"
      onClick={handleClick}
      className={buttonClassName}
      style={{ maxWidth: 150 }}
      {...buttonProps}
    />
  );
}
