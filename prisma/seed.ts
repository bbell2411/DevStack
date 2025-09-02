// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const snippets = [
    {
      title: "useLocalStorage Hook",
      code: `const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  return [storedValue, setStoredValue];
}`,
      language: "typescript",
      tags: "react,hooks,storage"
    },
    {
      title: "Email Regex",
      code: `/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`,
      language: "regex",
      tags: "validation,email"
    }
  ]

  for (const snip of snippets) {
    await prisma.snippet.create({ data: snip })
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())