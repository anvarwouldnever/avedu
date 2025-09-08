import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
import { useScale } from '../hooks/useScale';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedDot = Animated.createAnimatedComponent(Circle);

const ProgressBorder = ({
    percent = 0,
    size = 100,
    strokeWidth = 8,
    color = 'purple',
    baseColor = '#EFEEFC',
    duration = 1500
}) => {
    const { vs, isTablet } = useScale();

    const radius = ((size - 2) - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const progress = useSharedValue(0);

    useEffect(() => {
        const clampedPercent = Math.max(0, Math.min(percent, 100));
        progress.value = withTiming(clampedPercent, { duration });
    }, [percent]);

    const animatedProps = useAnimatedProps(() => {
        const strokeDashoffset = circumference * (1 - progress.value / 100);
        return { strokeDashoffset };
    });

    const animatedDotProps = useAnimatedProps(() => {
        const angle = (progress.value / 100) * 2 * Math.PI - Math.PI / 2;
        const cx = size / 2 + radius * Math.cos(angle);
        const cy = size / 2 + radius * Math.sin(angle);
        return { cx, cy };
    });

    const innerCircleSize = size * 0.6;

    return (
        <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            
            <Svg width={size} height={size}>
                
                <Circle
                    stroke={baseColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />

                <AnimatedCircle
                    stroke={color}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    animatedProps={animatedProps}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />

                <AnimatedDot
                    r={strokeWidth / 1.5}
                    fill={color}
                    animatedProps={animatedDotProps}
                />

            </Svg>

            <View style={{
                position: 'absolute',
                width: innerCircleSize,
                height: innerCircleSize,
                borderRadius: innerCircleSize / 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Text style={{ color: color, fontSize: isTablet ? vs(22) : vs(20), fontWeight: 'bold' }}>
                    {`${percent}%`}
                </Text>

            </View>

        </View>
    );
};

export default ProgressBorder;
