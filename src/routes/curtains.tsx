import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/category-page';
import { pageHead } from '@/lib/site-content';
export const Route=createFileRoute('/curtains')({head:()=>pageHead('Curtains in Bahria Town | Usmani Interior','Explore curtain styles, fabrics, and window treatments at Usmani Interior in Bahria Town, Islamabad. Request a free quote.','/curtains'),component:Page});
function Page(){return <CategoryPage slug="curtains"/>}
