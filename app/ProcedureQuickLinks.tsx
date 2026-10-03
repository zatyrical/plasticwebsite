import Link from 'next/link';
import styles from './ProcedureQuickLinks.module.css';

type Props = { links: { href: string; label: string }[] };

export default function ProcedureQuickLinks({ links }: Props) {
  return (
    <nav className={styles.links} aria-label="Guide shortcuts">
      <strong>Jump to</strong>
      {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
      <Link href="#enquire">Enquire about assessment</Link>
    </nav>
  );
}
