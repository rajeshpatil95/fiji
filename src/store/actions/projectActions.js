export const createProject = (project) => {
    //This is actually when you dont deal with non async calls, directly you return with (type and action) object
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((error) => {
            console.log(error);
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })
        //dispatch({ type: 'CREATE_PROJECT', project: project })
        //ES6 just beacause property and value name is same
    }
};