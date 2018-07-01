import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as R from 'ramda';

import HorizontalSceamStyles from './HorizontalSceam.module.css';

function HorizontalSceam({children, className, styleName, tagName = 'td', ...otherProps}) {
    const HSeamClass = classNames(R.props(['horizontal-sceam', styleName], HorizontalSceamStyles), className);
    const TagName = tagName;
    return (
        <TagName {...otherProps} className={HSeamClass}>{children}</TagName>
    );
}

HorizontalSceam.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    styleName: PropTypes.string,
    tagName: PropTypes.string,
};

export default HorizontalSceam;
