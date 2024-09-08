import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedDivProps extends MotionProps {
  children: ReactNode
  className?: string
}
export function AnimatedDiv({
  children,
  className,
  ...props
}: AnimatedDivProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
