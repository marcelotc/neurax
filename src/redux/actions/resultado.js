export const frontalColor = (color, points) => {
    return {
        type: 'ADD-FRONTAL',
        payload: {
            color,
            points,
            lobe: 'frontal'
        }
    }
}

export const temporalColor = (color, points) => {
    return {
        type: 'ADD-TEMPORAL',
        payload: {
            color,
            points,
            lobe: 'temporal'
        }
    }
}

export const occipitalColor = (color, points) => {
    return {
        type: 'ADD-OCCIPITAL',
        payload: {
            color,
            points,
            lobe: 'occipital'
        }
    }
}

export const parietalColor = (color, points) => {
    return {
        type: 'ADD-PARIETAL',
        payload: {
            color,
            points,
            lobe: 'parietal'
        }
    }
}