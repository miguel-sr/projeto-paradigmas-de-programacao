export default function Navbar() {
  return (
    <div className="text-white bg-teal-700 auto">
      <a href="/" className="">
        <h1 className="py-3 text-6xl text-center">PARADIGMAS DE PROGRAMAÇÃO</h1>
      </a>
      <ul className=" md:p-4 md:space-x-10 text-2xl text-center bg-teal-700 flex justify-center items-center space-x-4 p-4 h-12">
        <li className="group">
          <a
            href="/conteudo-n1"
            className="px-4 py-2 text-white group-hover:bg-white group-hover:text-black"
          >
            CONTEÚDO - N1
          </a>
        </li>
        <li className="group">
          <a
            href="/conteudo-n2"
            className="px-4 py-2 text-white group-hover:bg-white group-hover:text-black"
          >
            CONTEÚDO - N2
          </a>
        </li>
        <li className="group">
          <a
            href="/coding-dojo"
            className="block px-4 py-2 text-white group-hover:bg-white group-hover:text-black"
          >
            CODING DOJO
          </a>
        </li>
      </ul>
    </div>
  );
}
