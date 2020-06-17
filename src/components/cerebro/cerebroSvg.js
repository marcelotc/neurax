import React, { useState, } from 'react';
import { View, StyleSheet } from 'react-native';

import Svg, { Path, Circle } from 'react-native-svg';

const CerebroSvg = () => {

    const [nivelFrontal, setNivelFrontal] = useState('green')
    const [nivelTemporal, setNivelTemporal] = useState('lightblue')
    const [nivelOccipital, setNivelOccipital] = useState('red')
    const [nivelParietal, setNivelParietal] = useState('yellow')

    const handleLoboFrontal = () => {
        alert('Lobo Frontal')
    }

    const handleLoboParietal = () => {
        alert('Lobo Parietal')
    }

    const handleLoboTemporal = () => {
        alert('Lobo Temporal')
    }

    const handleLoboOccipital = () => {
        alert('Lobo Occipital')
    }

    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center' },
            ]}
        >
            <Svg
                width="300"
                height="530"
                viewBox="-11 -50 544 544"
            >
                <Path onPress={() => handleLoboFrontal()} fill={nivelFrontal} d="M280.5 34L288 26.5L302 13.5L270 7L244.5 17.5L227.5 13.5H196.5L169 26.5L148 41H127.5L102.5 49.5L83.5 70.5L52 88L39.5 112L33.5 131L22.5 139L6 171.5V193L13.5 223V244.5L30.5 269L66 281.5L77.5 292L96.5 298H119.5L127.5 304L135 308.5H148H169L196.5 292L207.5 285.5L215.5 278L221 269V259.5L252 152V146.5H262.5H270H278H286.5L292 142.5V133L286.5 123L278 112L270 102.5L264.5 93.5L262.5 81V67L270 49.5L280.5 34Z" stroke="#231F20" strokeWidth="12" />
                <Path d="M38.5 155.5L12 164V177L31 170.5L38.5 164L63.5 177L74.5 182.5L89.5 199.5H114L130.5 190L145.5 199.5H170L182 190L187.5 177H170L160.5 182.5H140H124V155.5C124 148.7 128.333 140.333 130.5 137L140 128.5L145.5 123V117L130.5 123L114 142.5L107.5 164V177V190H96L89.5 182.5L74.5 164L63.5 155.5H50.5H38.5Z" fill="#231F20" />
                <Path d="M90 270V280V301.5C100.167 303.667 123.3 308 134.5 308C145.7 308 142.5 303.667 139.5 301.5L160 292.5H170H179.5L185 286.5V281.947L200 263.5V249.5V232.5L195.5 227C192 221.667 183.9 211 179.5 211V218.5V227L185 235.5H179.5H170H160L139.5 238L134.5 243L150.5 249.5L160 256H179.5V263.5L170 280L160 286.5H134.5H120.5H108.5V270V263.5L99 243L82.5 235.5L61 227H51.5H42V243H61L74 249.5L82.5 256L90 270Z" fill="#231F20" stroke="#231F20" />
                <Path d="M266.5 369L249.5 331L275 336.5L315.5 342L346.5 331L374.5 321L400 304.5L424 294.5L463 287.5H487L492.5 294.5L484 317L463 331L424 363H400L388.5 373L395.5 395.5L404 419.5V437.5H380.5L346.5 449C344.667 442.333 340.2 427.1 337 419.5C333.8 411.9 328 400.333 325.5 395.5L304.5 385.5L282 378.5L266.5 369Z" stroke="#231F20" strokeWidth="16" />
                <Path onPress={() => handleLoboFrontal()} fill={nivelParietal} d="M264.5 161H310L461.5 139.5L481 129L496 122.5L487.5 94.5L481 74L461.5 58L442 50.5H427L418.5 37.5L397 20H367H330.5H310L292.5 30L281 37.5L271 58L264.5 86L281 116V129L292.5 139.5V146L259 161" stroke="#231F20" strokeWidth="16" />
                <Path d="M411 65L422 30V65L420.5 81.5L411 90.5V65Z" fill="#231F20" stroke="#231F20" />
                <Path d="M281.476 79.7133L312.486 60.1073L289.872 86.8206L278.066 98.4449L265 99.1759L281.476 79.7133Z" fill="#231F20" stroke="#231F20" />
                <Path onPress={() => handleLoboOccipital()} fill={nivelOccipital} d="M407 282.5L422.5 149L463 142L499.5 131L508 149V164.5L499.5 181.5L508 202.5V230.5L499.5 260L488.5 282.5H468.5L433.5 296.5H407V282.5Z" stroke="#231F20" strokeWidth="16" />
                <Path onPress={() => handleLoboTemporal()} fill={nivelTemporal} d="M228.5 276L258 158H411V209L401.5 276V294.5V305.5L366 324H325.5V334H296L258 324L248.5 312.5H224.5L205 305.5H193.5L205 294.5L228.5 276Z" stroke="#231F20" strokeWidth="16" />
                <Path d="M339 187L350 152V187L348.5 203.5L339 212.5V187Z" fill="#231F20" stroke="#231F20" />
                <Path d="M257.476 294.713L288.486 275.107L265.872 301.821L254.066 313.445L241 314.176L257.476 294.713Z" fill="#231F20" stroke="#231F20" />
                <Circle onPress={() => handleLoboTemporal()} cx="330" cy="246" r="30" fill="black" />
                <Path onPress={() => handleLoboTemporal()} d="M318.75 234.073C318.75 234.073 325.362 231.463 325.75 231C326.139 230.537 330.71 228.333 333.48 229.536C336.25 230.74 338 232.406 338 232.406L339.75 235.74V242.406L336.25 245.74L338 247.406L339.75 249.073L341.5 252.406V254.073V255.74L339.75 259.073L338 260.74L334.5 262.406H327.5H324L320.5 260.74L318.75 259.073L317 257.406V255.74L318.75 254.073L322.25 255.74L324 257.406H327.5H332.75L334.5 254.073V250.74L332.75 249.073H329.25H327.5H324L322.25 247.406V245.74L325.75 244.073H331L332.75 242.406L334.5 239.073V237.406L332.75 235.74H329.25H325.75L322.25 237.406L318.75 239.073L317 237.406V235.74L318.75 234.073Z" fill="white" />
                <Circle onPress={() => handleLoboOccipital()} cx="457" cy="222" r="30" fill="black" />
                <Path onPress={() => handleLoboOccipital()} d="M444 228.667L459.75 207L461.5 205.333H465V227H470.25V228.667V232H465V237L463.25 238.667H459.75L458 237V232H445.75L444 230.333V228.667Z" fill="white" />
                <Circle onPress={() => handleLoboParietal()} cx="360" cy="101" r="30" fill="black" />
                <Path onPress={() => handleLoboParietal()} d="M348.75 86L350.5 84.3333L357.5 81H361L366.25 82.6667L369.75 86V91L368 97.6667L357.5 109.333H371.5C373.25 109.333 380.25 116 371.5 116H348.75C348.75 116 341.75 116 347 111C352.25 106 362.75 94.3333 362.75 94.3333V91L361 87.6667H355.75L348.75 91C346.512 90.6891 346.071 89.996 347 87.6667L348.75 86Z" fill="white" />
                <Circle onPress={() => handleLoboFrontal()} cx="187" cy="136" r="30" fill="black" />
                <Path onPress={() => handleLoboFrontal()} d="M177.85 124.333L186.6 119.333H191.85V146H197.1L198.85 147.667V149.333L197.1 151H177.85L176.1 149.333V147.667L177.85 146H184.85V126L181.35 127.667H179.6L177.85 126V124.333Z" fill="white" />
            </Svg>
        </View>
    );
}

export default CerebroSvg