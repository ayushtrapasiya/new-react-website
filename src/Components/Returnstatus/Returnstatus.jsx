import React from 'react'
import './Returnstatus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchange, faLock, faTag, faTruck } from '@fortawesome/free-solid-svg-icons'
 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Returnstatus() {
    return (
        <>
            <div className="shopping-detail">
                <div className="detail  ">
                    <div className="part1">
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div className="part2">
                        <h5>Free shipping</h5>
                        <p>From all orders over $100</p>
                    </div>
                </div>
                <div className="detail  ">
                    <div className="part1">
                        <FontAwesomeIcon icon={faExchange} />
                    </div>
                    <div className="part2">
                        <h5>
                            Free returns</h5>
                        <p>Return money within 30 days</p>
                    </div>
                </div>
                <div className="detail  ">
                    <div className="part1">
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="part2">
                        <h5>Secure shopping</h5>
                        <p>You're in safe hands</p>
                    </div>
                </div>
                <div className="detail ">
                    <div className="part1">
                        <FontAwesomeIcon icon={faTag} />
                    </div>
                    <div className="part2">
                        <h5>Free shipping</h5>
                        <p>From all orders over $100</p>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}
