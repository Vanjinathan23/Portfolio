import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { useAudioEngine } from './AudioEngine';

interface Props {
    onOpen: () => void;
}

export const DossierPill: React.FC<Props> = ({ onOpen }) => {
    const { playSwoosh } = useAudioEngine();

    return (
        <button
            onClick={() => {
                playSwoosh();
                onOpen();
            }}
            className="fixed right-0 top-1/4 z-40 flex items-center group cursor-pointer"
        >
            <div className="bg-gradient-to-l from-[#D4AF37]/20 to-[#080808]/90 backdrop-blur-md border-y border-l border-[#D4AF37]/30 py-3 pl-4 pr-1 rounded-l-2xl shadow-[0_4px_30px_rgba(212,175,55,0.15)] flex items-center gap-3 transition-transform translate-x-10 group-hover:translate-x-0 relative overflow-hidden text-left">
                <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors" />
                <div className="p-2 rounded-xl bg-[#171717] border border-[#D4AF37]/40 text-[#D4AF37] relative z-10 shrink-0">
                    <Award className="w-5 h-5" />
                </div>
                <div className="relative z-10 pr-2">
                    <p className="text-[10px] font-mono text-[#F7F7F7] tracking-widest uppercase">VIP Recruiter</p>
                    <p className="text-xs font-bold text-[#D4AF37] flex items-center gap-1">
                        60s Dossier <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                </div>
            </div>
        </button>
    );
};
