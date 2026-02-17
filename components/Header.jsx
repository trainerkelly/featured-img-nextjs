"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Header() {
  const pathname = usePathname();
  return (
    <Container>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavbarBrand
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <h1 className="fs-4">Featured Image Sizing</h1>
        </NavbarBrand>
        <Nav>
          <NavbarToggle>
            <NavbarCollapse>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/crop-resize-only"
                    className={`nav-link ${pathname === "/crop-resize-only" ? "active" : ""}`}
                  >
                    Crop &amp; Resize Only
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/plus-blur"
                    className={`nav-link ${pathname === "/plus-blur" ? "active" : ""}`}
                  >
                    +Blur
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/plus-blur-overlay"
                    className={`nav-link ${pathname === "/plus-blur-overlay" ? "active" : ""}`}
                  >
                    + Blur &amp; Overlay
                  </Link>
                </li>
              </ul>
            </NavbarCollapse>
          </NavbarToggle>
        </Nav>
      </header>
    </Container>
  );
}
