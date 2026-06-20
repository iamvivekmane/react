import React, { useContext, useEffect, useEffectEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Landing = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 gap-4">
                <div>
                    <h1 className='text-center'>TheNotebook - Your notes always in sync</h1>
                </div>
                <div >
                    <p className='text-center'>Create, edit, and organize your notes the moment an idea strikes. Search through everything you've ever written in seconds, and pick up right where you left off on your laptop, phone, or tablet. Every note is encrypted in transit and at rest, and stays tied only to your account.</p>
                </div>
                <div className="buttons d-flex flex-row gap-2">
                    <Link className="btn border mx-1" type="submit" to="/Login">Login</Link>
                    <Link className="btn btn-primary mx-1" type="submit" to="/Signup">Signup</Link>
                </div>
            </div >
            <div className="main">
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-md-3 my-3">
                            <div className="card h-100 w-100">
                                <div className="card-body">
                                    <div className=" bg-primay" style={{ width: "35px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#0d6efd" d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z" /></svg>
                                    </div>
                                    <p className="card-text h5 pt-2">Quick capture</p>
                                    <p className="card-text text-sm">Jot down ideas the moment they strike, no friction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-3">
                            <div className="card h-100 w-100">
                                <div className="card-body">
                                    <div className=" bg-primay" style={{ width: "35px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#0d6efd" d="M544.1 256L552 256C565.3 256 576 245.3 576 232L576 88C576 78.3 570.2 69.5 561.2 65.8C552.2 62.1 541.9 64.2 535 71L483.3 122.8C439 86.1 382 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6C143.2 199.5 223.3 128 320 128C364.4 128 405.2 143 437.7 168.3L391 215C384.1 221.9 382.1 232.2 385.8 241.2C389.5 250.2 398.3 256 408 256L544.1 256zM573.5 356.5C576 339 563.8 322.8 546.4 320.3C529 317.8 512.7 330 510.2 347.4C496.9 440.4 416.8 511.9 320.1 511.9C275.7 511.9 234.9 496.9 202.4 471.6L249 425C255.9 418.1 257.9 407.8 254.2 398.8C250.5 389.8 241.7 384 232 384L88 384C74.7 384 64 394.7 64 408L64 552C64 561.7 69.8 570.5 78.8 574.2C87.8 577.9 98.1 575.8 105 569L156.8 517.2C201 553.9 258 576 320 576C449 576 555.7 480.6 573.4 356.5z" /></svg>
                                    </div>
                                    <p className="card-text h5 pt-2">Synced everywhere
                                    </p>
                                    <p className="card-text text-sm">Continue right where you left off, on any device. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  my-3">
                            <div className="card h-100 w-100">
                                <div className="card-body">
                                    <div className=" bg-primay" style={{ width: "35px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#0d6efd" d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" /></svg>
                                    </div>
                                    <p className="card-text h5 pt-2">Stays private
                                    </p>
                                    <p className="card-text text-sm">Your notes are tied only to you, never shared.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Landing