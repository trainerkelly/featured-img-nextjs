import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <h1 className="fs-4">Featured Image Sizing</h1>
        </Link>
      </header>
    </div>
  );
}
