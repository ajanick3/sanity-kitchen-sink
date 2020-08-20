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
                  buildHookId: '5f3df39349e7ac1aa30379db',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y8is9ehz',
                  apiId: '89e4c4d2-7a80-4286-a9c5-a569d4ca0ae4'
                },
                {
                  buildHookId: '5f3df39450da3adeee1455a8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d7dvib32',
                  apiId: 'de70737e-8a02-4582-9096-1949d5b03710'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajanick3/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d7dvib32.netlify.app', category: 'apps'}
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
