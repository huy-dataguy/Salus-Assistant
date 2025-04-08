import { motion } from 'framer-motion';
import { MessageCircle, BotIcon } from 'lucide-react';

export const Overview = () => {
  return (
    <>
      <motion.div
        key="overview"
        className="max-w-3xl mx-auto md:mt-20"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ delay: 0.75 }}
      >
        <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
          <p className="flex flex-row justify-center gap-4 items-center">
            <BotIcon size={44} />
            <span>+</span>
            <MessageCircle size={44} />
          </p>
          <p>
            Chào bạn <strong>tôi là Salus</strong><br />
            Trợ lí trong hành trình duy trì lối sống lành mạnh của bạn<br />
            <strong>NguyenHan -</strong><strong> ThanhBinh - QuocHuy - MinhQuang</strong>.
          </p>
        </div>
      </motion.div>
    </>
  );
};
