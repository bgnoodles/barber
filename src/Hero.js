function Hero() {
    return (
        <div>
            <section className="hero align-items-stretch">
                <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
                    <img className="hero-imagen-desarrollador" src="fotohero.png" alt="Foto de Barberia" />
                        <h1> Barberia BCM la mas chida!</h1>
                        <h2> Cortes con el mejor estilo ;D</h2>
                </div>
                <div className="hero-inferior">
                    <img className="hero-inferior-imagen img-fluid" src="barbershop-inferior.png"
                        alt="Logo de bareberia inferior"/>
                </div>
            </section>
        </div>
    );
}

export default Hero;