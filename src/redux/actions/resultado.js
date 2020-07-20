export const frontalColor = (color) => {
    return {
        type: 'ADD-FRONTAL',
        payload: {
            color,
            lobe: 'frontal'
        }
    }
}

export const temporalColor = (color) => {
    return {
        type: 'ADD-TEMPORAL',
        payload: {
            color,
            lobe: 'temporal'
        }
    }
}

export const occipitalColor = (color) => {
    return {
        type: 'ADD-OCCIPITAL',
        payload: {
            color,
            lobe: 'occipital'
        }
    }
}

export const parietalColor = (color) => {
    return {
        type: 'ADD-PARIETAL',
        payload: {
            color,
            lobe: 'parietal'
        }
    }
}