import React from 'react';
import { motion } from 'framer-motion';
import { Github, Slack, Chrome, Figma, Trello, Plus, Twitter, Linkedin } from 'lucide-react';

// Orbiting Icon Component
const OrbitingIcon = ({ icon: Icon, angle, radius }: { icon: any, angle: number, radius: number }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '4rem',
        height: '4rem',
        marginLeft: '-2rem', // center the 4rem icon
        marginTop: '-2rem',
      }}
      animate={{
        rotate: [angle, angle + 360],
      }}
      transition={{
        duration: 30, // speed of orbit
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        style={{
          transformOrigin: 'center',
          transform: `translateX(${radius}px)`,
        }}
      >
        {/* Inner Counter-Rotation to keep icon upright */}
        <motion.div
          animate={{
            rotate: [-angle, -angle - 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 bg-white dark:bg-slate-800 rounded-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-700 dark:text-slate-200 transition-colors"
        >
           <Icon size={28} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
            <div className="text-xs font-bold tracking-wide uppercase text-slate-500 mb-4 flex items-center justify-center gap-2 font-display">
                <div className="w-2 h-2 rounded-none bg-primary-500"></div>
                Easily Integrate With Your Favorite Apps
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 font-display tracking-tighter transition-colors">
            Seamless Integrations <br/> With Your Favorite Software
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-body transition-colors">
                Starting is simple, as workflows are fully integrated with the apps your team already uses.
            </p>
        </motion.div>

        {/* Integration Graph Area */}
        <div className="relative w-full max-w-4xl mx-auto h-[500px] flex items-center justify-center">
            
            {/* Orbital Rings */}
            <div className="absolute w-[300px] h-[300px] rounded-none border border-dashed border-slate-200 dark:border-slate-800 transition-colors"></div>
            <div className="absolute w-[550px] h-[550px] rounded-none border border-dashed border-slate-200 dark:border-slate-800 opacity-60 transition-colors"></div>

            {/* Center Hub */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-slate-900 dark:bg-white rounded-none flex items-center justify-center text-white dark:text-slate-900 z-20 relative shadow-lg transition-colors"
            >
                <Plus size={40} />
            </motion.div>

            {/* Orbiting Icons - Inner Ring */}
            <OrbitingIcon icon={Slack} angle={0} radius={150} />
            <OrbitingIcon icon={Figma} angle={90} radius={150} />
            <OrbitingIcon icon={Github} angle={180} radius={150} />
            <OrbitingIcon icon={Chrome} angle={270} radius={150} />

             {/* Orbiting Icons - Outer Ring */}
             <OrbitingIcon icon={Trello} angle={45} radius={275} />
             <OrbitingIcon icon={Twitter} angle={165} radius={275} />
             <OrbitingIcon icon={Linkedin} angle={285} radius={275} />
        </div>

        <div className="flex justify-center gap-8 mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8 w-full max-w-2xl mx-auto font-display tracking-wide transition-colors">
            <span className="flex items-center gap-2">◎ Present and Discuss</span>
            <span className="flex items-center gap-2">◎ Real-Time Video and Audio</span>
            <span className="flex items-center gap-2">◎ Customizable Solutions</span>
        </div>
      </div>
    </section>
  );
}