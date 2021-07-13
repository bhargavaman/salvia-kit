const ReactSnippet = () => (
  <pre className="px-4 py-1 max-w-full text-custom font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`[ 
  {
    section : 'Apps',
    content: [
      {
        title: 'All Apps',
        icon: <AllAppsIcon />,
        link: '/admin/all-apps'
      },
      {
        title: 'Updates',
        icon: <UpdatesIcon/>,
        link: '/admin/updates'
      },
    ]
  },
]
`}
  </pre>
);

const ReactSnippetShort = () => (
  <pre className="px-4 py-1 max-w-full text-custom font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`[ 
  {
    title: 'All Apps',
    icon: <AllAppsIcon />,
    link: '/admin/all-apps'
  },
  {
    title: 'Updates',
    icon: <UpdatesIcon/>,
    link: '/admin/updates'
  },
]
`}
  </pre>
);

const VueSnippet = () => (
  <pre className="px-4 py-1 max-w-full text-green-700 font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`<sidenav-items-section name="Apps">
  <sidenav-item title="All Apps" to="/">
    <all-apps-icon />
  </sidenav-item>
  
  <sidenav-item title="Updates" to="/admin/updates">
    <updates-icon />
  </sidenav-item>
</sidenav-items-section>
`}
  </pre>
);

const VueSnippetShort = () => (
  <pre className="px-4 py-1 max-w-full text-green-700 font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`<sidenav-item title="All Apps" to="/">
    <all-apps-icon />
</sidenav-item>
  
<sidenav-item title="Updates" to="/admin/updates">
  <updates-icon />
</sidenav-item>
`}
  </pre>
);

export { ReactSnippet, ReactSnippetShort, VueSnippet, VueSnippetShort };
