import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/category-page';
import { pageHead } from '@/lib/site-content';
export const Route=createFileRoute('/carpets-rugs')({head:()=>pageHead('Carpets & Rugs Islamabad | Usmani Interior','Explore carpet and rug styling for your home with Usmani Interior in Bahria Town, Islamabad. Contact us for availability and pricing.','/carpets-rugs'),component:Page});
function Page(){return <CategoryPage slug="carpets-rugs"/>}
