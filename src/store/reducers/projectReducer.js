const initState = {
    projects: [
        { id: '1', title: 'Help me Find Peach', content: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes' },
        { id: '2', title: 'Help me Find Peach', content: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes' },
        { id: '3', title: 'Help me Find Peach', content: 'Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_ PROJECT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            return state;
    }
}

export default projectReducer;