

let initialState = {
    HotNews: [
        {
            headingText: 'Bitcoin: 33k',
            mainText: 'Bitochek to upal, a ya goworil, a mne ne verili',
            id: 1
        },
        {
            headingText: 'Good morning pusies and pidors',
            mainText: 'I`m Pasha Technicue',
            id: 2
        },
    ],
    FrendsNews:
    {
        headingText: 'Olds shit, news stupid',
        mainText: 'Anyway,  Is only u problem',
        id: 1
    },
    PublisNews:
    {
        headingText: 'Healing staff',
        mainText: 'Becouse time never hieled me',
        id: 1
    },
    SportNews: {
        headingText: 'NBA',
        mainText: 'Clippers SUCK, nothing new',
        id: 1
    },
    PoliticsNews:
    {
        headingText: 'Don`t do something',
        mainText: 'It`s off light in room while someone fuck u in ass',
        id: 1
    }

}

const newsReducer = (state = initialState,action) => {


    return state
}

export default newsReducer;