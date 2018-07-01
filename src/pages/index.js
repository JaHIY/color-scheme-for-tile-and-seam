import React from 'react';
import Swiper from 'react-id-swiper';
import * as R from 'ramda';

import Tiles from '../components/Tiles';
import Tile from '../components/Tile';
import HorizontalSceam from '../components/HorizontalSceam';

import 'react-id-swiper/src/styles/css/swiper.css';

const sceamClassNames = R.toPairs({
    '纯净白': 'pure-white',
    '象牙白': 'ivory-white',
    '米石黄': 'rice-stone-yellow',
    '浅卡其': 'light-khaki',
    '亚麻白金': 'flax-platinum',
    '钻石金': 'diamond-gold',
    '樱草黄': 'primrose-yellow',
    '赤金': 'pink-gold',
    '星光金': 'starlight-gold',
    '星空亮金': 'starry-sky-bright-gold',
    '星空幻金': 'starry-sky-fantasy-gold',
    '星空琉璃': 'starry-sky-glaze',
    '星空亮棕': 'starry-sky-bright-brown',
    '星空亮银': 'starry-sky-bright-silver',
    '星光银': 'starlight-silver',
    '流沙银': 'quicksand-silver',
    '香槟金': 'champagne-gold',
    '蔚蓝': 'sky-blue',
    '星光银灰': 'starry-sky-silvery-grey',
    '烟灰': 'smoke-grey',
    '太妃棕': 'concubine-brown',
    '神秘黑': 'mysterious-black',
});

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TilesProps: {
                horizontalTileNum: 3,
                verticalTileNum: 3,
            },
            TileProps: {
                styleName: 't1',
            },
            HorizontalSceamProps: {
                styleName: 'pure-white',
            },
            VerticalSceamProps: {
                styleName: 'pure-white',
            },
            window: {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        };

    }

    updateDimensions() {
        this.setState((prevState) => {
            return R.compose(
                R.set(
                    R.lensPath(['window', 'width']),
                    window.innerWidth
                ),
                R.set(
                    R.lensPath(['window', 'height']),
                    window.innerHeight
                )
            )(prevState);
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    render() {
        const horizontalTileNum = this.state.TilesProps.horizontalTileNum;
        const VerticalSceamWidth = Math.floor((this.state.window.width - 16) / (horizontalTileNum * 25 + horizontalTileNum - 1));
        const TileSideLength = Math.floor(VerticalSceamWidth * 25);

        const TileProps = R.compose(
            R.set(
                R.lensPath(['style', 'height']),
                `${TileSideLength}px`
            ),
            R.set(
                R.lensPath(['style', 'width']),
                `${TileSideLength}px`
            )
        )(this.state.TileProps);

        const HorizontalSceamProps = R.set(
            R.lensPath(['style', 'height']),
            `${VerticalSceamWidth}px`,
            this.state.HorizontalSceamProps
        );

        const VerticalSceamProps = R.set(
            R.lensPath(['style', 'width']),
            `${VerticalSceamWidth}px`,
            this.state.VerticalSceamProps
        );

        return (
            <div>
                <div>
                    <h5
                        style={{
                            fontSize: '14px',
                            textAlign: 'center',
                            margin: '9px 0',
                        }}
                    >
                    ← 左右滑动选 瓷砖 或 颜色 →
                    </h5>
                </div>
                <div
                    style={{
                        padding: '10px 0',
                        borderTop: '1px solid #eee',
                    }}
                >
                    <Swiper
                        direction='horizontal'
                        slidesPerView={3}
                        slidesPerGroup={3}
                        on={{
                            click: (ev) => {
                                const attr = 'data-style-name';
                                const el = R.find(
                                    (e) => {
                                        return (e && e.hasAttribute(attr));
                                    },
                                    [
                                        ev.target,
                                        ev.target.parentElement,
                                    ]
                                );
                                const styleName = el.getAttribute(attr);
                                this.setState((prevState) => {
                                    return R.set(
                                        R.lensPath(['TileProps', 'styleName']),
                                        styleName,
                                        prevState
                                    );
                                });
                            },
                        }}
                    >
                        {R.map(
                            (e) => {
                                const styleName = `t${e}`;
                                return (
                                    <div
                                        key={styleName}
                                        data-style-name={styleName}
                                    >
                                        <Tile
                                            tagName='div'
                                            styleName={styleName}
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                margin: '0 auto',
                                            }}
                                        />
                                    </div>
                                );
                            },
                            R.range(1, 36)
                        )}
                    </Swiper>
                </div>
                <div
                    style={{
                        padding: '10px 0',
                        borderTop: '1px solid #eee',
                    }}
                >
                    <Swiper
                        direction='horizontal'
                        slidesPerView={3}
                        slidesPerGroup={3}
                        on={{
                            click: (ev) => {
                                const attr = 'data-style-name';
                                const el = R.find(
                                    (e) => {
                                        return (e && e.hasAttribute(attr));
                                    },
                                    [
                                        ev.target,
                                        ev.target.parentElement,
                                    ]
                                );
                                const styleName = el.getAttribute(attr);
                                this.setState((prevState) => {
                                    return R.compose(
                                        R.set(
                                            R.lensPath(['VerticalSceamProps', 'styleName']),
                                            styleName
                                        ),
                                        R.set(
                                            R.lensPath(['HorizontalSceamProps', 'styleName']),
                                            styleName
                                        )
                                    )(prevState);
                                });
                            },
                        }}
                    >
                        {R.map(
                            (e) => {
                                return (
                                    <div
                                        key={e[1]}
                                        data-style-name={e[1]}
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <HorizontalSceam
                                            tagName='div'
                                            styleName={e[1]}
                                            style={{
                                                width: '35px',
                                                height: '12px',
                                                borderRadius: '6px',
                                                marginRight: '6px',
                                                display: 'inline-block',
                                            }}
                                        />
                                        <span>
                                            {e[0]}
                                        </span>
                                    </div>
                                );
                            },
                            sceamClassNames
                        )}
                    </Swiper>
                </div>
                <div
                    style={{
                        margin: '0px auto',
                        padding: '10px 0',
                        borderTop: '1px solid #eee',
                    }}
                >
                    <Tiles
                        {...this.state.TilesProps}
                        TileProps={TileProps}
                        HorizontalSceamProps={HorizontalSceamProps}
                        VerticalSceamProps={VerticalSceamProps}
                        style={{
                            margin: '0px auto',
                        }}
                    />
                </div>
            </div>
        );
    }
};

Index.propTypes = {
};

export default Index;
