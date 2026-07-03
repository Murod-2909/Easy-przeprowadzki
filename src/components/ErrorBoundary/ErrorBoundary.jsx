import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    padding: "20px",
                    textAlign: "center",
                    fontFamily: "'Montserrat', sans-serif",
                }}>
                    <h1 style={{color: "#214562", fontSize: "1.6rem"}}>Ups! Coś poszło nie tak.</h1>
                    <p style={{color: "#56626C", maxWidth: "420px"}}>
                        Wystąpił nieoczekiwany błąd. Odśwież stronę lub zadzwoń do nas:
                        {" "}<a href="tel:+48509931555" style={{color: "#2D984B"}}>+48 509 931 555</a>
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: "#4ECB71",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "14px 30px",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Odśwież stronę
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
