import { View } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import Sections from './Announcements/Sections';
import Remarks from './Announcements/Remarks';
import Announcements from './Announcements/Announcements';
import Slider from '../navigation/Slider/Slider';
import SliderContent from '../navigation/Slider/SliderContent';

const AnnouncementsScreen = () => {

    const { s, vs } = useScale();

    const [section, setSection] = useState<string>('примечания');

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: vs(20), backgroundColor: 'white', rowGap: vs(25) }}>

            <Sections section={section} setSection={setSection} />

            {section === 'примечания' ?  

                <Remarks section={section} />
            :
                <Announcements section={section} />
            }

            <Slider>
                <SliderContent />
            </Slider>

        </View>
    )
}

export default AnnouncementsScreen;