import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import CollectionItem from '../collection-item/collection-item.component';

// Styles
import {
    CollectionPreviewContainer,
    PreviewContainer,
    TitleContainer,
  } from './collection-preview.styles';

/**
 * Display a preview of items (four) for the given collection.
 * @param {Array} items - list of collection items.
 * @param {String} title - collection title.
 */
export const CollectionPreview = ({ items, title, history, match, routeName }) => (
    <CollectionPreviewContainer>
        { /* Title */ }
        <TitleContainer onClick={() => history.push(`${ match.path }/${ routeName }`)}>
            {title.toUpperCase()}
        </TitleContainer>

        { /* Collection items */ }
        <PreviewContainer>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={ item.id } item={ item } />
                    ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
