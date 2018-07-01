import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import Tile from './Tile';
import HorizontalSceam from './HorizontalSceam';
import VerticalSceam from './VerticalSceam';

function Tiles(
    {
        horizontalTileNum = 3,
        verticalTileNum = 3,
        TileProps,
        HorizontalSceamProps,
        VerticalSceamProps,
        ...otherProps
    } = {}
) {
    return (
        <table {...otherProps}>
            <tbody>
                {R.intersperse(
                    <tr>
                        <HorizontalSceam
                            colSpan={verticalTileNum*2-1}
                            {...HorizontalSceamProps}
                        />
                    </tr>,
                    R.repeat(
                        <tr>
                            {R.intersperse(
                                <VerticalSceam {...VerticalSceamProps}/>,
                                R.repeat(
                                    <Tile {...TileProps}/>,
                                    verticalTileNum
                                )
                            )}
                        </tr>
                        ,
                        horizontalTileNum
                    )
                )}
            </tbody>
        </table>
    );
}

Tiles.propTypes = {
    horizontalTileNum: PropTypes.number,
    verticalTileNum: PropTypes.number,
    TileProps: PropTypes.object,
    HorizontalSceamProps: PropTypes.object,
    VerticalSceamProps: PropTypes.object,
};

export default Tiles;
