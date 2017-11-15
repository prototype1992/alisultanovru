import React from 'react';

import { YMaps, Map, Clusterer, GeoObject } from 'react-yandex-maps';

const POINTS = [
    {
        id: 0,
        coordinates: '42.987030, 47.473834',
        hintContent: 'Тут я учился с 2009 по 2014 год'
    },
    {
        id: 1,
        coordinates: '43.191280, 46.966472',
        hintContent: 'Мой дом. Тут я вырос'
    },
    {
        id: 2,
        coordinates: '55.722198, 37.681541',
        hintContent: 'Leomax Group - Тут я работаю'
    },
    {
        id: 3,
        coordinates: '55.778669, 37.587964',
        hintContent: 'Был а Авито на MoscowJS 37'
    }
];

class Journey extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mapState = {
            center: [55.76, 37.64],
            zoom: 3
        };

        return (
            <section>
                <h1 className="section-title">Путешествие</h1>

                <div className="map-block">

                    <YMaps>
                        <Map state={mapState} width={'100%'} height={'70vh'}>

                            <Clusterer>
                                <GeoObject
                                    geometry={{
                                        type: 'Point',
                                        coordinates: [42.987030, 47.473834],
                                    }}
                                    properties={{
                                        hintContent: 'Тут я учился с 2009 по 2014 год',
                                    }}
                                />

                                <GeoObject
                                    geometry={{
                                        type: 'Point',
                                        coordinates: [43.191280, 46.966472],
                                    }}
                                    properties={{
                                        hintContent: 'Тут я вырос',
                                    }}
                                />

                                <GeoObject
                                    geometry={{
                                        type: 'Point',
                                        coordinates: [55.722198, 37.681541],
                                    }}
                                    properties={{
                                        hintContent: 'Тут я работаю',
                                    }}
                                />

                                <GeoObject
                                    geometry={{
                                        type: 'Point',
                                        coordinates: [55.778669, 37.587964],
                                    }}
                                    properties={{
                                        hintContent: 'Был а Авито на MoscowJS 37',
                                    }}
                                />
                            </Clusterer>

                        </Map>
                    </YMaps>

                </div>
            </section>
        );
    }
}

export default Journey;
