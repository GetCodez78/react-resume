import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        var msg = 'Check Out Some of My Works!';
        if (this.props.data) {
            var proj = this.props.data.projects.map(function (folio) {
                var photo = 'images/portfolio/' + folio.image;
                return (
                    <div key={folio.title} className="columns portfolio-item">
                        <div className="item-wrap">

                            <a href={folio.modal} title={folio.title}>
                                <img alt={folio.title} src={photo} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{folio.title}</h5>
                                        <p>{folio.category}</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>)
            })
        }


        return (

            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>{msg}</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                            {proj}

                        </div>
                    </div>


                </div>
            </section>



        );
    }
}

export default Portfolio;
