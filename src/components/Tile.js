import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as R from 'ramda';

import TileStyles from './Tile.module.css';

function Tile({children, className, styleName, tagName = 'td', ...otherProps}) {
    const TileClass = classNames(R.props(['tile', styleName], TileStyles), className);
    const TagName = tagName;
    return (
        <TagName {...otherProps} className={TileClass}>{children}</TagName>
    );
}

Tile.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    styleName: PropTypes.string,
    tagName: PropTypes.string,
};

export default Tile;
