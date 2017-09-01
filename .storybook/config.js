import {configure} from '@storybook/react';

function loadStories() {
    require('../stories/Basic');
    require('../stories/Callback');
    require('../stories/RowFilter');
    require('../stories/Viewport');
}

configure(loadStories, module);
