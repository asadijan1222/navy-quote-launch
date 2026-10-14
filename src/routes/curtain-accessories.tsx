import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/category-page';
import { pageHead } from '@/lib/site-content';
export const Route=createFileRoute('/curtain-accessories')({head:()=>pageHead('Curtain Accessories Islamabad | Usmani Interior','Discuss curtain accessories and suitable fittings with Usmani Interior in Bahria Town, Islamabad. Ask about available options and pricing.','/curtain-accessories'),component:Page});
function Page(){return <CategoryPage slug="curtain-accessories"/>}
