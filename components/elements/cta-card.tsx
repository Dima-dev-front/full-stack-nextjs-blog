import React from 'react';
import Image from "next/image";

const CTACard = () => {
    return (
        <div className="px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden">
            {/* Overlay */}
            <div className="z-10 absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/45"/>
            {/* Image */}
            <Image
                fill
                alt="CTA Card Image"
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />

            {/* Content Container */}
            <div className="relative z-10">
                <div className="text-lg font-medium">#bymyself</div>
                <h3 className="mt-3 text-4xl font-semibold">Explore uma mente não entendida comigo!</h3>
                <p className="max-w-lg mt-2 text-lg">Eu sou um ser humano, cristão, comprometido eternamente com o amor
                    da minha vida, um amigo dedicado e
                    apaixonado pela escrita. Sempre busco ajudar o próximo e desejo a todos saúde, paz e sucesso em suas
                    vidas!
                </p>

                {/* Form */}
                <form className="mt-6 flex gap-2 items-center w-full">
                    <input placeholder="Inserir email"
                           className="md:w-auto w-full placeholder:text-sm bg-white/80 text-base px-4 py-2 rounded-md outline-none focus:ring-2 ring-neutral-600"
                           type="text"/>
                    <button className="whitespace-nowrap px-3 py-2 rounded-md bg-neutral-900 text-neutral-200">Newsletter</button>
                </form>
            </div>
        </div>
    );
}

export default CTACard;
