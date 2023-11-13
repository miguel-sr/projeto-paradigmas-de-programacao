export default function ObterCodigoPadrao(id: number) {
  switch (id) {
    case 86:
      return `Console.WriteLine("Hello World!");`;
    case 1:
      return `#include <iostream>

int main() {
  std::cout << "Hello World!"; 
  return 0;
}`;
    case 5:
      return `program hello\n  print *, "Hello World!"\nend program hello`;
    case 10:
      return `class HelloWorld
{
  public static void main(String[] args)
  {
      System.out.println("Hello World!");
  }
}`;

    case 56:
    case 57:
      return `console.log("Hello World!")`;

    case 116:
      return `print("Hello World!")`;

    default:
      return "";
  }
}
