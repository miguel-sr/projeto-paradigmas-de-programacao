export default function ObterLangExtension(id: number) {
  switch (id) {
    case 86:
      return "csharp";
    case 1:
      return "cpp";
    case 5:
      return "fortran";
    case 10:
      return "java";
    case 56:
      return "javascript";
    case 116:
      return "python";
    case 57:
      return "typescript";

    default:
      return "javascript";
  }
}
