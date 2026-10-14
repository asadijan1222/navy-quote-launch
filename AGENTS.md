<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared navigation and footer in the root shell, and content in separate public routes, so every page is independently accessible and shareable.
- Use the structured site-content module for business details, categories, FAQs, and page metadata to avoid duplicated content.
- Quote requests use a validated public server function and an insert-only RLS table; private inquiries must never be publicly readable.
- Treat generated interior images as illustrative inspiration, not customer project or inventory evidence, to keep the gallery truthful.
