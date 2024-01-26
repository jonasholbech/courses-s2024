import Nav from "./Nav";
// Layout is a Server Component by default
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}

//Nav.js
"use client"
import SearchBar from "./SearchBar";
import Logo from "./Logo";

export default function Nav(){
    return (
        <nav>
            <Logo />
            <SearchBar />
        </nav>
    )
}
