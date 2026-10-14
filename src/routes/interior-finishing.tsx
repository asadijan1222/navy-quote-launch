import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/category-page';
import { pageHead } from '@/lib/site-content';
export const Route=createFileRoute('/interior-finishing')({head:()=>pageHead('Interior Finishing Inquiries | Usmani Interior','Discuss interior finishing and wall-to-wall carpeting requirements with Usmani Interior. Product and service availability is subject to confirmation.','/interior-finishing'),component:Page});
function Page(){return <CategoryPage slug="interior-finishing"/>}
