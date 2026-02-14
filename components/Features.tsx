import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Video, Globe, Monitor, Mic, CheckSquare, MessageSquare, Clock, ArrowRight, Kanban } from 'lucide-react';
import { VideoCallMockup, KanbanMockup } from './ui/Mockups';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  }
};

const FeatureCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <motion.div 
    variants={itemVariants}
    className="bg-white dark:bg-slate-900 p-6 rounded-none border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
  >
    <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-none flex items-center justify-center text-slate-700 dark:text-slate-200 mb-4 border border-slate-100 dark:border-slate-700">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display tracking-tight">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-body">{text}</p>
  </motion.div>
);

export default function Features() {
  return (
    <div className="py-24 space-y-32 overflow-hidden px-6" id="features">
      
      {/* Video Conferencing Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-50 dark:bg-slate-900/50 rounded-none p-8 md:p-16 border border-slate-100 dark:border-slate-800 transition-colors"
        >
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold mb-4 font-display tracking-wide uppercase text-xs">
                    <Video size={18} />
                    <span>Video and Voice Calls</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] font-display tracking-tighter transition-colors">
                    Meet More Efficiently With Video Conferencing
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed font-body transition-colors">
                    Meeting face-to-face creates a natural sense of understanding and connection. 
                    Bring this experience into the digital space by allowing people to share information seamlessly.
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                    Learn More <ArrowRight size={16} />
                </button>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
            >
                <VideoCallMockup />
            </motion.div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-3 gap-6"
            >
                <FeatureCard 
                    icon={<Globe size={20} />}
                    title="Join Anywhere"
                    text="Chanty makes teamwork seamless—start a call anywhere and instantly switch from chat."
                />
                <FeatureCard 
                    icon={<Monitor size={20} />}
                    title="Present And Discuss"
                    text="During a video conference, you can easily share your screen to present your work."
                />
                <FeatureCard 
                    icon={<Mic size={20} />}
                    title="4k Video And Audio"
                    text="Bring your meetings to life with 4K video & audio, supporting up to 1,000 participants."
                />
            </motion.div>
        </motion.div>
      </section>

      {/* Task Management Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white dark:bg-slate-900 rounded-none p-8 md:p-16 border border-slate-200 dark:border-slate-800 transition-colors"
        >
             <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-2 lg:order-1"
                >
                    <KanbanMockup />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="order-1 lg:order-2 pl-0 lg:pl-10"
                >
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold mb-4 font-display tracking-wide uppercase text-xs">
                        <CheckSquare size={18} />
                        <span>Task in Main Board</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] font-display tracking-tighter transition-colors">
                        Create And Manage Tasks To Stay Productive
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed font-body transition-colors">
                        Create tasks from scratch or convert any message into a task, making collaboration smarter. 
                        Ensure that projects progress smoothly from start to finish.
                    </p>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                        Learn More <ArrowRight size={16} />
                    </button>
                </motion.div>
             </div>

             <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-3 gap-6"
            >
                <FeatureCard 
                    icon={<Kanban size={20} />}
                    title="Kanban View"
                    text="It's essentially a way to view tasks in rows & columns, similar to popular project management tools."
                />
                <FeatureCard 
                    icon={<MessageSquare size={20} />}
                    title="Discuss Tasks"
                    text="Discuss tasks in their appropriate channels to maintain a workflow focused on specific tasks."
                />
                <FeatureCard 
                    icon={<Clock size={20} />}
                    title="Set Due Date"
                    text="With Chanty's due date feature, you'll stay notified of deadlines and have full control."
                />
            </motion.div>
        </motion.div>
      </section>

    </div>
  );
}