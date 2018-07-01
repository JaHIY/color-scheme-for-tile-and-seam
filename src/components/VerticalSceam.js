import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as R from 'ramda';

import VerticalSceamStyles from './VerticalSceam.module.css';

function VerticalSceam({children, className, styleName, tagName = 'td', ...otherProps}) {
    const VSeamClass = classNames(R.props(['vertical-sceam', styleName], VerticalSceamStyles), className);
    const TagName = tagName;
    return (
        <TagName {...otherProps} className={VSeamClass}>{children}</TagName>
    );
}

VerticalSceam.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    styleName: PropTypes.string,
    tagName: PropTypes.string,
};

export default VerticalSceam;
