import React from 'react';
import w4u from '../../images/w4u.png'
import r4u from '../../images/r4u.png'
import RingQuiz from '../../images/RingQuiz.png'
import a4u from '../../images/a4u.png'

//make images 700 x 500 px

function Projects() {
  return (
    <section className="project">
        <h2>Jessica Yip's Portfolio</h2>
        <div className="project-container">
            <img className="project-img" src={RingQuiz} alt="RingQuiz"/>
            <section className="project-description">
                <h3>RingQuiz</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                </ul>
                <p className="project-element">RingQuiz is to test your basic knowledge on rings and diamonds. 
                It keeps count of the questions asked and answered as well as telling the user whether their answer 
                was correct or wrong and if you are wrong it will give you the correct answer. There isn’t a limit 
                on how many times you can take the quiz. The quiz was built for novice individuals who are looking to 
                see where they stand on their knowledge. I am very interested in the different cuts, clarity, shapes 
                that there are and I believe this quiz is the perfect way to start.</p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/jyip01/RingQuiz.github.io" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://jyip01.github.io/RingQuiz.github.io/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </section>
        </div>

        <div className="project-container">
            <img className="project-img" src={a4u} alt="Albums4U"/>
            <section className="project-description">
                <h3>Albums4U</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                    <li><i className="fab fa-spotify fa-2x"></i></li>
                </ul>
                <p className="project-element">Albums4U allows any user to search an artist of their choice and display's those album's name and cover images back to them. 
                Along with those attributes it also allows a user to click on the album cover and open up a new tab to that album in Spotify, where they can listen to it. 
                Music is something that has kept me going through the hard times and easy ones. It is an out for many people, their minds drift away in the music, lyrics. 
                On a daily basis I use Spotify to listen to my music and that is why I decided to create something using the Spotify API.</p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/jyip01/Albums4U.github.io-Albums4U" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://jyip01.github.io/Albums4U.github.io-Albums4U/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </section>
        </div>

        <div className="project-container">
            <img className="project-img" src={r4u} alt="Recommend4U"/>
            <section className="project-description">
                <h3>Recommend4U</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                    <li><i className="fab fa-node fa-2x"></i></li>
                    <li><i className="fab fa-react fa-2x"></i></li>
                    <li><i className="fab fa-jquery fa-2x">
                        <svg viewBox="0 0 128 128" data-name="jquery" className="tech-icon">
                            <path fill="#4b4b4b" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"></path>
                        </svg>
                    </i></li>
                </ul>
                <p className="project-element">Recommend4U is a web application that allows users to look up products for recommendations or to recommend products themselves. 
                For example, if a user is looking to buy gamer headphones, they can make a request for "Gaming Headphones" and other users might comment "Turtle Beaches", "Recons", 
                etc. The goal of Recommend4U is to make it easier for users to make decisions with the help of other users' experience and recommendations.</p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/jyip01/recommend4u-client" target="_blank" rel="noopener noreferrer">View Client</a>
                    <a className="project-button" href="https://github.com/jyip01/recommend4u-api" target="_blank" rel="noopener noreferrer">View API</a>
                    <a className="project-button demo" href="https://recommend4u-client.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </section>
        </div>

        <div className="project-container">
            <img className="project-img" src={w4u} alt="WishList4U"/>
            <section className="project-description">
                <h3>WishList4U</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                    <li><i className="fab fa-node fa-2x"></i></li>
                    <li><i className="fab fa-react fa-2x"></i></li>
                    <li><i className="fab fa-jquery fa-2x">
                        <svg viewBox="0 0 128 128" data-name="jquery" className="tech-icon">
                            <path fill="#4b4b4b" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"></path>
                        </svg>
                    </i></li>
                </ul>
                <p className="project-element">WishList4U is a web application that allows users to create wishlists for themselves. For example, you can create a 
                list for your birthday or for your children's birthday and continue to add until the day comes. The goal of WishList4U is to make it easy to keep 
                track of your wants or needs.</p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/jyip01/wishlist4u-client" target="_blank" rel="noopener noreferrer">View Client</a>
                    <a className="project-button" href="https://github.com/jyip01/wishlist4u-api" target="_blank" rel="noopener noreferrer">View API</a>
                    <a className="project-button demo" href="https://wishlist4u-client.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </section>
        </div>

    </section>
  );
}

export default Projects;