import React from 'react';
import { motion } from 'framer-motion';

export const DashboardMockup = () => {
  return (
    <div className="rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden w-full aspect-[16/10] flex flex-col relative shadow-sm transition-colors">
      {/* Header */}
      <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 space-x-2 bg-slate-50/50 dark:bg-slate-800/50 transition-colors">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-none bg-red-400"></div>
          <div className="w-3 h-3 rounded-none bg-amber-400"></div>
          <div className="w-3 h-3 rounded-none bg-emerald-400"></div>
        </div>
        <div className="flex-1"></div>
        <div className="w-24 h-6 bg-slate-200/50 dark:bg-slate-700/50 rounded-none transition-colors"></div>
        <div className="w-8 h-8 rounded-none bg-primary-100 dark:bg-primary-900/50 transition-colors"></div>
      </div>
      
      {/* Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 sm:w-64 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 flex flex-col p-4 space-y-4 hidden sm:flex transition-colors">
          <div className="h-8 w-32 bg-slate-200/50 dark:bg-slate-800 rounded-none mb-4 transition-colors"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-3 opacity-60">
              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-none transition-colors"></div>
              <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded-none transition-colors"></div>
            </div>
          ))}
          <div className="mt-auto h-24 bg-primary-50 dark:bg-primary-900/10 rounded-none p-3 border border-primary-100 dark:border-primary-900/30 transition-colors">
             <div className="h-3 w-16 bg-primary-200 dark:bg-primary-800 rounded-none mb-2 transition-colors"></div>
             <div className="h-2 w-full bg-primary-100 dark:bg-primary-900/40 rounded-none transition-colors"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white dark:bg-slate-900 p-6 relative transition-colors">
             <div className="absolute top-6 left-6 right-6 flex justify-between items-center mb-6">
                <div className="h-8 w-48 bg-slate-800 dark:bg-slate-200 rounded-none transition-colors"></div>
                <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-none bg-yellow-100 dark:bg-yellow-900/50 border-2 border-white dark:border-slate-800 -ml-2 transition-colors"></div>
                    <div className="w-8 h-8 rounded-none bg-green-100 dark:bg-green-900/50 border-2 border-white dark:border-slate-800 -ml-2 transition-colors"></div>
                    <div className="w-8 h-8 rounded-none bg-blue-100 dark:bg-blue-900/50 border-2 border-white dark:border-slate-800 -ml-2 transition-colors"></div>
                </div>
             </div>
             
             {/* Fake Chat/Feed */}
             <div className="mt-16 space-y-4">
                {[1, 2].map(i => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start space-x-4"
                    >
                        <div className="w-10 h-10 rounded-none bg-slate-100 dark:bg-slate-800 flex-shrink-0 transition-colors"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-none transition-colors"></div>
                            <div className="h-16 w-full bg-slate-50 dark:bg-slate-800 rounded-none border border-slate-100 dark:border-slate-700 p-3 transition-colors">
                                <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-none mb-2 transition-colors"></div>
                                <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-none transition-colors"></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
                
                {/* Floating element simulating active task */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute bottom-6 right-6 w-64 bg-white dark:bg-slate-800 rounded-none border border-slate-200 dark:border-slate-700 p-4 shadow-sm transition-colors"
                >
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 rounded-none bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center transition-colors">✓</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-white transition-colors">Task Completed</div>
                    </div>
                    <div className="h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-none overflow-hidden transition-colors">
                        <div className="h-full bg-green-500 w-full"></div>
                    </div>
                </motion.div>
             </div>
        </div>
      </div>
    </div>
  );
};

export const VideoCallMockup = () => {
    return (
        <div className="rounded-none bg-slate-900 border border-slate-800 overflow-hidden aspect-video relative flex flex-col shadow-lg">
             <div className="absolute top-4 right-4 z-10 w-32 h-24 bg-slate-800 rounded-none border border-slate-700 shadow-sm overflow-hidden">
                <img src="https://picsum.photos/200/200?random=1" className="w-full h-full object-cover opacity-80" alt="participant" />
             </div>
             <div className="flex-1 relative">
                <img src="https://picsum.photos/800/600?random=2" className="w-full h-full object-cover opacity-90" alt="main speaker" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent p-6 flex justify-center items-end space-x-4">
                    <div className="w-10 h-10 rounded-none bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                         <div className="w-4 h-4 bg-white rounded-none"></div>
                    </div>
                    <div className="w-10 h-10 rounded-none bg-red-500 flex items-center justify-center shadow-red-500/20">
                         <div className="w-4 h-4 bg-white rounded-none"></div>
                    </div>
                    <div className="w-10 h-10 rounded-none bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                         <div className="w-4 h-4 bg-white rounded-none"></div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export const KanbanMockup = () => {
    return (
        <div className="rounded-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 aspect-[4/3] flex space-x-4 overflow-hidden shadow-sm transition-colors">
            {[0, 1, 2].map((col, i) => (
                <div key={i} className="flex-1 flex flex-col space-y-3 min-w-[120px]">
                    <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-none mb-2 transition-colors"></div>
                    {[0, 1].map((card, j) => (
                        <motion.div 
                            key={j}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 + j * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-3 rounded-none border border-slate-200 dark:border-slate-700 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] transition-colors"
                        >
                            <div className="h-2 w-12 bg-purple-100 dark:bg-purple-900 rounded-none mb-2 transition-colors"></div>
                            <div className="h-3 w-3/4 bg-slate-800 dark:bg-slate-300 rounded-none mb-2 transition-colors"></div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-none mb-1 transition-colors"></div>
                            <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-700 rounded-none transition-colors"></div>
                            <div className="mt-3 flex -space-x-2">
                                <div className="w-6 h-6 rounded-none bg-slate-200 dark:bg-slate-600 border border-white dark:border-slate-800 transition-colors"></div>
                                <div className="w-6 h-6 rounded-none bg-slate-300 dark:bg-slate-500 border border-white dark:border-slate-800 transition-colors"></div>
                            </div>
                        </motion.div>
                    ))}
                    {i === 1 && (
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-none border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 text-xs transition-colors">
                            + Add Task
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}