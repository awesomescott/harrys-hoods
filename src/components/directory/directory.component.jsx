import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Redux selectors
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

// Styles
import { DirectoryMenuContainer } from './directory.styles';

/**
 * Display the store menu items.
 */
export const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
