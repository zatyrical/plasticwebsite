const socialLinks = [
  { href: 'https://www.linkedin.com/in/dr-jeremy-sun', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/jermsun?stkn=enQ3Z3NrenZqNHJi', label: 'Instagram' },
  { href: 'https://lymphedasia.com/dr-jeremy-sun-lymphedema-specialist/', label: 'LymphedAsia profile' }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Dr Jeremy Sun</strong>
          <p>Plastic, Reconstructive & Aesthetic Surgery • Singapore</p>
        </div>
        <nav className="footer-socials" aria-label="Professional profiles">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
