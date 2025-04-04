export function ErrorPage() {
    return (
        <>
            <div className="error-container">
                <div className="error-text">
                    <h1>Oops!</h1>
                    <p>We can't seem to find the page you're looking for.</p>
                    <p>Why not try any of the links in the sidebar to find what you're looking for?</p>
                </div>
                <div className="error-img">
                    <img src="Images/404-Error.jpeg" alt="404 Error" />
                </div>
            </div>
        </>
    )
}