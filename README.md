This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

📦 Налаштування перед запуском
Перед запуском проєкту необхідно створити файл .env.local у корені проєкту та додати до нього наступну змінну оточення:

NEXT_PUBLIC_BASE_URL=http://localhost:3000

Ця змінна використовується для звернення до внутрішнього API (через proxy) на сервері під час виконання SSR/SSG-запитів.

⚙️ Основні технології
Next.js 15+

Tailwind CSS v4

ShadCN UI — готові компоненти на базі Tailwind, повністю кастомізовані під потреби

Redux Toolkit + redux-persist — глобальний стан зі збереженням у sessionStorage localStorage

DnD Kit — потужна бібліотека для drag-and-drop функціональності з підтримкою TypeScript

🧱 Структура проєкту
Проєкт побудовано з використанням глобальної директорії src, яка містить основні модулі застосунку:

app/ — директорія з маршрутами (Next.js App Router):

/ — коренева сторінка;

/product/[id] — сторінка перегляду окремого продукту;

/cart — сторінка кошика;

api/ — ендпоінти для локального отримання списку продуктів без звернення до сторонніх API.

styles/ — глобальні стилі.

components/ — всі UI та логічні компоненти організовано у відповідні підпапки:

ui/ — спільні інтерфейсні компоненти, переважно з бібліотеки shadcn/ui;

product/, cart/ тощо — мають власні підпапки ui/ з компонентами, специфічними для кожної частини застосунку.

hooks/ — кастомні React-хуки.

utils/ — утиліти, допоміжні функції.

types/ — типи TypeScript, що описують структуру даних.

redux/ — логіка глобального стану з використанням Redux Toolkit + redux-persist.

data/ — мокові дані для імітації товарів у списку.

💾 Збереження стану
Перемикання між візуальними сітками (grid, large, list) зберігається у sessionStorage. Це дозволяє зберігати обране відображення товарів між перезавантаженнями сторінки протягом однієї сесії.

Порядок продуктів у сітці, змінений за допомогою drag-and-drop (DnD Kit), також зберігається в sessionStorage через Redux Persist.

Фільтри та пагінація використовують URL-параметри (searchParams), що зберігаються в localStorage. Це дозволяє зберігати фільтри та пагінацію між перезавантаженнями сторінки протягом одного сеансу.
покращує UX і дозволяє легко ділитися посиланням зі збереженими параметрами перегляду.

🎨 Стилі та тема
У глобальному CSS-файлі вже передбачені базові стилі для всіх компонентів shadcn/ui, включно з темізацією (light/dark) "з коробки".

Через це додаткові стилі майже не використовувались, але непотрібні стилі не були видалені навмисно, щоб уникнути втрати можливостей темізації та подальшого розширення.

📝 Примітка
Цей проєкт є тестовим завданням, тому основний акцент зроблено на реалізацію функціоналу та архітектури. Стилистичне оформлення виконано базово — з огляду на обмежений час та з метою раціонального підходу до виконання завдання. Візуальні аспекти можна допрацювати за потреби, адже досконалості немає меж 😊

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
