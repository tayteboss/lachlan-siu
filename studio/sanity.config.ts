import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { muxInput } from 'sanity-plugin-mux-input';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { EarthGlobeIcon, DocumentIcon, CaseIcon, BulbOutlineIcon } from '@sanity/icons';

export default defineConfig({
  name: 'default',
  title: 'Lachlan Siu',

  projectId: 'bzv289pk',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
        .title('Content')
        .items([
          orderableDocumentListDeskItem({type: 'project', S, context}),
          S.divider(),
          S.listItem()
            .title('Site Settings')
            .icon(EarthGlobeIcon)
            .child(
              S.editor()
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
          S.divider(),
          S.listItem()
            .title('Home Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('homePage')
                .documentId('homePage')
            ),
          S.listItem()
            .title('Info Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('infoPage')
                .documentId('infoPage')
            ),
          S.divider(),
          S.listItem()
            .title('Projects')
            .icon(CaseIcon)
            .child(
              S.documentList()
                .title('Projects')
                .schemaType('project')
                .filter('_type == "project"')
            ),
          S.divider(),
        ])
      },
    }),
    visionTool(),
    muxInput({mp4_support: 'standard'}),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes,
  },

  parts: [
    {
      name: 'part:@sanity/base/theme/variables-style',
      path: './customEditorStyles.css',
    },
  ],
})

