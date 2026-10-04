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
          <p>Private consultations at Astrid Plastic Surgery, Paragon Medical</p>
          <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,.74)', fontSize: '14px', lineHeight: 1.7 }}>
            <a href="https://www.google.com/maps/place/Dr+Jeremy+Sun/data=!4m2!3m1!1s0x0:0xcba381971e77822e" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>290 Orchard Road, #09-01/02, Singapore 238859</a><br />
            <a href="tel:+6565303573" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>+65 6530 3573</a><span aria-hidden="true"> • </span><a href="/#contact" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Enquire</a>
          </address>
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
