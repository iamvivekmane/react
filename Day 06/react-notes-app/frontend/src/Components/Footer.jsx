import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="border-top sticky " style={{ marginTop: "70px", paddingTop: "30px" }}>
                <div class="container d-flex flex-wrap justify-content-between align-items-center gap-3 pt-10">
                    <div class="d-flex align-items-center gap-2 fw-medium text-secondary">
                        <i class="ti ti-notebook text-primary fs-5 text-center"></i>
                        TheNotebook
                    </div>

                    <p class="text-muted small mb-0 text-center">© 2026 TheNotebook. All rights reserved.</p>

                    <div class="d-flex gap-4 ">
                        <a href="#" class="text-secondary text-decoration-none small bg-primary">Privacy</a>
                        <a href="#" class="text-secondary text-decoration-none small">Terms</a>
                        <a href="#" class="text-secondary text-decoration-none small">Contact</a>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer