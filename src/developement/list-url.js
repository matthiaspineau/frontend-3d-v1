const url = [
    {
        id: 1,
        path: '/uploaded-file',
        name: 'UploadedFile',
        component: () => import('../developement/view/UploadedFile.vue'),
        scss: 'developement/_page.scss',
        description: ['1ere version du model viewer, fait appel au composant (model stl, model obj, model mixins)']
    },
    {
        id: 2,
        path: '/ui',
        name: 'Ui',
        component: () => import('../developement/view/Ui.vue'),
        // scss: 'developement/_page.scss',
        description: ['']
    }
]