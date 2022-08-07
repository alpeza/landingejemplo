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
                  buildHookId: '62ef697ece17ee5a9e94a693',
                  title: 'Sanity Studio',
                  name: 'landingejemplo-studio',
                  apiId: '7fdbf1d7-ce6a-4c4c-8195-7cdb556eb851'
                },
                {
                  buildHookId: '62ef697ece17ee5afb94a3ab',
                  title: 'Blog Website',
                  name: 'landingejemplo',
                  apiId: '2ce560d4-a2db-4fd8-942c-04c453479274'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alpeza/landingejemplo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landingejemplo.netlify.app', category: 'apps'}
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
