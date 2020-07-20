export const frontalColor = (color, numberOfAcitivities) => {
    return {
        type: 'ADD-FRONTAL',
        payload: {
            color,
            numberOfAcitivities,
            lobe: 'frontal'
        }
    }
}

export const temporalColor = (color, numberOfAcitivities) => {
    return {
        type: 'ADD-TEMPORAL',
        payload: {
            color,
            numberOfAcitivities,
            lobe: 'temporal'
        }
    }
}

export const occipitalColor = (color, numberOfAcitivities) => {
    return {
        type: 'ADD-OCCIPITAL',
        payload: {
            color,
            numberOfAcitivities,
            lobe: 'occipital'
        }
    }
}

export const parietalColor = (color, numberOfAcitivities) => {
    return {
        type: 'ADD-PARIETAL',
        payload: {
            color,
            numberOfAcitivities,
            lobe: 'parietal'
        }
    }
}