let initialState = {
    SettingsContent: [
        {
            Heading: 'Main',
            Content: '',
            Changes: ''
        },
        {
            Heading: ' Profile theme',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Privacy',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Content settings',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Password',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Mail',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Phone number',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Verification',
            Content: '',
            Changes: ''
        },
        {
            Heading: 'Language',
            Content: '',
            Changes: ''
        }
    ] 

}

const settingsReducer = (state = initialState,action) => {


    return state
}

export default settingsReducer;