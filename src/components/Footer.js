"use client"

export default function Footer() {

    return (
        <>
            <footer className="bg-black text-white text-center py-8 text-sm">
                <p>&copy; {new Date().getFullYear()} Virtue Construction NW, LLC</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="#" className="hover:text-[#6B8E23] transition">Facebook</a>
                    <a href="#" className="hover:text-[#6B8E23] transition">Instagram</a>
                </div>
            </footer>
        </>
    )
}