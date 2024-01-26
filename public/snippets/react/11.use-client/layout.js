// Client Components
import SearchBar from "./SearchBar";
import Nav from "./Nav";
// Server Components
import Logo from "./Logo";

// Layout is a Server Component by default
export default function Layout({ children }) {
  return (
    <>
      <Nav>
        <Logo />
        <SearchBar />
      </Nav>
      <main>{children}</main>
    </>
  );
}

//Nav.js
"use client"
export default function Nav({children}){
    return <nav>{children}</nav>
}