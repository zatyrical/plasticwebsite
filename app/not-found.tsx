export default function NotFound() {
  return (
    <main className="article-page">
      <section className="section">
        <div className="container article-content">
          <p className="eyebrow">404 — Page not found</p>
          <h1>We couldn’t find that page.</h1>
          <p>The address may be incomplete, or the page may have moved. You can continue with one of these links.</p>
          <nav aria-label="Page recovery">
            <ul>
              <li><a style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }} href="/">Return to the homepage</a></li>
              <li><a style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }} href="/aesthetic-surgery">Explore aesthetic surgery procedures</a></li>
              <li><a style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }} href="/blog">Browse patient education guides</a></li>
              <li><a style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }} href="/#contact">Find contact and consultation details</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
