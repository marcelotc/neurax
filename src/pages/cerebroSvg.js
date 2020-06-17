import React, { useState, } from 'react';
import { View, StyleSheet } from 'react-native';

import Svg, { Path } from 'react-native-svg';

const SvgExample = () => {

    const [nivelFrontal, setNivelFrontal] = useState('green')
    const [nivelTemporal, setNivelTemporal] = useState('lightblue')
    const [nivelOccipital, setNivelOccipital] = useState('red')
    const [nivelParietal, setNivelParietal] = useState('yellow')

    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center' },
            ]}
        >
            <Svg
                width="430"
                height="530"
                viewBox="-11 -16 544 544"
            >
                <Path fill={nivelFrontal} d="M280.5 34L288 26.5L302 13.5L270 7L244.5 17.5L227.5 13.5H196.5L169 26.5L148 41H127.5L102.5 49.5L83.5 70.5L52 88L39.5 112L33.5 131L22.5 139L6 171.5V193L13.5 223V244.5L30.5 269L66 281.5L77.5 292L96.5 298H119.5L127.5 304L135 308.5H148H169L196.5 292L207.5 285.5L215.5 278L221 269V259.5L252 152V146.5H262.5H270H278H286.5L292 142.5V133L286.5 123L278 112L270 102.5L264.5 93.5L262.5 81V67L270 49.5L280.5 34Z" stroke="black" strokeWidth="12" />
                <Path d="M38.5 155.5L12 164V177L31 170.5L38.5 164L63.5 177L74.5 182.5L89.5 199.5H114L130.5 190L145.5 199.5H170L182 190L187.5 177H170L160.5 182.5H140H124V155.5C124 148.7 128.333 140.333 130.5 137L140 128.5L145.5 123V117L130.5 123L114 142.5L107.5 164V177V190H96L89.5 182.5L74.5 164L63.5 155.5H50.5H38.5Z" fill="black" />
                <Path d="M90 270V280V301.5C100.167 303.667 123.3 308 134.5 308C145.7 308 142.5 303.667 139.5 301.5L160 292.5H170H179.5L185 286.5V281.947L200 263.5V249.5V232.5L195.5 227C192 221.667 183.9 211 179.5 211V218.5V227L185 235.5H179.5H170H160L139.5 238L134.5 243L150.5 249.5L160 256H179.5V263.5L170 280L160 286.5H134.5H120.5H108.5V270V263.5L99 243L82.5 235.5L61 227H51.5H42V243H61L74 249.5L82.5 256L90 270Z" fill="black" stroke="black" />
                <Path d="M266.5 369L249.5 331L275 336.5L315.5 342L346.5 331L374.5 321L400 304.5L424 294.5L463 287.5H487L492.5 294.5L484 317L463 331L424 363H400L388.5 373L395.5 395.5L404 419.5V437.5H380.5L346.5 449C344.667 442.333 340.2 427.1 337 419.5C333.8 411.9 328 400.333 325.5 395.5L304.5 385.5L282 378.5L266.5 369Z" stroke="black" strokeWidth="16" />
                <Path fill={nivelParietal} d="M264.5 161H310L461.5 139.5L481 129L496 122.5L487.5 94.5L481 74L461.5 58L442 50.5H427L418.5 37.5L397 20H367H330.5H310L292.5 30L281 37.5L271 58L264.5 86L281 116V129L292.5 139.5V146L259 161" stroke="black" strokeWidth="16" />
                <Path d="M411 65L422 30V65L420.5 81.5L411 90.5V65Z" fill="black" stroke="black" />
                <Path d="M281.476 79.7133L312.486 60.1073L289.872 86.8206L278.066 98.4449L265 99.1759L281.476 79.7133Z" fill="black" stroke="black" />
                <Path fill={nivelOccipital} d="M407 282.5L422.5 149L463 142L499.5 131L508 149V164.5L499.5 181.5L508 202.5V230.5L499.5 260L488.5 282.5H468.5L433.5 296.5H407V282.5Z" stroke="black" strokeWidth="16" />
                <Path d="M425.476 208.713L456.486 189.107L433.872 215.821L422.066 227.445L409 228.176L425.476 208.713Z" fill="black" stroke="black" />
                <Path fill={nivelTemporal} d="M228.5 276L258 158H411V209L401.5 276V294.5V305.5L366 324H325.5V334H296L258 324L248.5 312.5H224.5L205 305.5H193.5L205 294.5L228.5 276Z" stroke="black" strokeWidth="16" />
                <Path d="M339 187L350 152V187L348.5 203.5L339 212.5V187Z" fill="black" stroke="black" />
                <Path d="M316.476 223.713L347.486 204.107L324.872 230.821L313.066 242.445L300 243.176L316.476 223.713Z" fill="black" stroke="black" />
                <Path d="M257.476 294.713L288.486 275.107L265.872 301.821L254.066 313.445L241 314.176L257.476 294.713Z" fill="black" stroke="black" />
            </Svg>
        </View>
    );
}

export default SvgExample