export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60388b4dcdd33e51404b3625',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pfjckaeq',
                  apiId: 'cdd3cd6f-ae03-4373-8c5b-7cdf36f5017a'
                },
                {
                  buildHookId: '60388b4d31fa2463a37d410e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wvj3zohy',
                  apiId: '0eae3a84-435f-4bb4-a08f-3a8a6d3d5aac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/issa554/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wvj3zohy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
