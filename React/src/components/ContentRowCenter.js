import React from 'react';
import LastBookInDb from './LastBookInDb';
import TopicsInDb from './TopicsInDb';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <LastBookInDb />
            <TopicsInDb />
            <LastUserInDb />
        </div>
    )
}

export default ContentRowCenter;