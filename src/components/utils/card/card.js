import React from 'react';

const Card = () => (

    <div class="card small">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="images/office.jpg" alt='card'/>
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>Card Title</span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
)

export default Card;