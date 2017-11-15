import React from 'react';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <h1 className="section-title">Моя музыка</h1>

                <div className="my-music">
                    <audio src="./audio/don_omar_feat_tego_calderon_bandoleros.mp3" controls />
                </div>
            </section>
        );
    }
}

export default Music;
