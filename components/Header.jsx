"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavItem,
  NavLink,
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
        <Nav className="nav nav-pills">
          <NavItem className="nav-item">
            <NavLink
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              aria-current="page"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              href="/crop-resize-only"
              className={`nav-link ${pathname === "/crop-resize-only" ? "active" : ""}`}
            >
              Crop &amp; Resize Only
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              href="/plus-blur"
              className={`nav-link ${pathname === "/plus-blur" ? "active" : ""}`}
            >
              +Blur
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink
              href="/plus-blur-overlay"
              className={`nav-link ${pathname === "/plus-blur-overlay" ? "active" : ""}`}
            >
              + Blur &amp; Overlay
            </NavLink>
          </NavItem>
        </Nav>
      </header>
    </Container>
  );
}
