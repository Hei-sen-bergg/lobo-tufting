import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lobo Tufting')
    .items([
      S.listItem()
        .title('📄 Page copy (all headings & text)')
        .child(
          S.list()
            .title('Page copy')
            .items([
              S.documentTypeListItem('hero').title('Home Page'),
              S.documentTypeListItem('shopPage').title('Shop Page'),
              S.documentTypeListItem('galleryPage').title('Gallery Page'),
              S.documentTypeListItem('workshopPage').title('Workshops Page'),
              S.documentTypeListItem('accessoriesPage').title('Accessories Page'),
              S.documentTypeListItem('about').title('About Page'),
              S.documentTypeListItem('settings').title('Site Settings'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('🛍️ Shop — Rugs (products)')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('🧰 Accessories (12–15+ items)')
        .child(S.documentTypeList('accessory').title('Accessories')),
      S.listItem()
        .title('🖼️ Gallery photos')
        .child(S.documentTypeList('gallery').title('Gallery Items')),
    ]);
