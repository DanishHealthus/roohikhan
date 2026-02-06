import React from 'react'
import CountUp from 'react-countup';

const FunFact = (props) => {

    const funFact = [
        {
            title: '235',
            subTitle: 'Trusted Clients',
            Symbol:'+',
        },
        {
            title: '95',
            subTitle: 'Cases Won',
            Symbol:'%',
        },
        {
            title: '120',
            subTitle: 'Dedicated Lawyer',
            Symbol:'+',
        },
        {
            title: '15',
            subTitle: 'Case Dismissed',
            Symbol:'%',
        },


    ]

    return (

        <section className={`wpo-fun-fact-section content ${props.fnClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids-wrap">
                            <div className="wpo-fun-fact-grids clearfix">
                                {funFact.map((funfact, fitem) => (
                                    <div className="grid" key={fitem}>
                                        <div className="info">
                                            <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}</h3>
                                            <p>{funfact.subTitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;