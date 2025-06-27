"use client"

export default function CallToAction() {

    return (
        <>
            <section className="bg-[#4A5A6A] text-white text-center py-12 px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to upgrade your home?
                </h3>
                <a
                    href="/estimate"
                    className="inline-block bg-[#6B8E23] hover:bg-[#58731B] text-white font-semibold px-8 py-4 rounded transition shadow-lg"
                >
                    Get Your Estimate
                </a>
            </section>
        </>
    )
}