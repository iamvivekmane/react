import React from 'react'

const Footer = () => {
    return (
        <footer className="border-top mt-5 pt-2 pb-2">
            <div className="container d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center gap-3 text-center text-md-start">

                <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                    <i className="ti ti-notebook text-primary fs-5"></i>
                    TheNotebook
                </div>

                <p className="text-muted small mb-0">© 2026 TheNotebook. All rights reserved.</p>

                <div className="d-flex gap-4">
                    <a href="#" className="text-secondary text-decoration-none small">Privacy</a>
                    <a href="#" className="text-secondary text-decoration-none small">Terms</a>
                    <a href="#" className="text-secondary text-decoration-none small">Contact</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer