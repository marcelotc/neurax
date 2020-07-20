const COLORS = [];

const resultado = (state = COLORS, action) => {
    switch (action.type) {
        case 'ADD-FRONTAL':
            return [...state, action.payload]
        case 'ADD-TEMPORAL':
            return [...state, action.payload]
        case 'ADD-OCCIPITAL':
            return [...state, action.payload]
        case 'ADD-PARIETAL':
            return [...state, action.payload]
        default:
            return state
    }
}

export default resultado