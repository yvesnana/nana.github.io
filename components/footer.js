import { motion } from 'framer-motion'

import { Box } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Footer = () => {
  return (
    <motion.div
    initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nicolás Forteza. All Rights Reserved.
    </Box>
    </motion.div>
  )
}

export default Footer
