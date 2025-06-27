"use client"

export default function Hero() {

    return (
        <>
            <section
                className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Modern Windows & Doors
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        Quality. Innovation. Style.
                    </p>
                    <a
                        href="/estimate"
                        className="inline-block bg-[#6B8E23] hover:bg-[#58731B] text-white font-semibold px-8 py-4 rounded transition shadow-lg"
                    >
                        Get Your Estimate
                    </a>
                </div>
            </section>
        </>
    )
}