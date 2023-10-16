export default function Navbar() {
  return (
    <nav className="z-10 w-full bg-teal-700 text-white font-bold">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/">
          <h1 className="text-2xl">Paradigmas de Programação</h1>
        </a>
        <ul className="flex md:p-4 md:space-x-4">
          <a href="/conteudo-n1">Conteúdo - N1</a>
          <a href="/conteudo-n2">Conteúdo - N2</a>
          <a href="/ide">IDE</a>
        </ul>
      </div>
    </nav>
  );
}
